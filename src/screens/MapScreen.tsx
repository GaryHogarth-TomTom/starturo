import * as React from 'react';

import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomSheetNavigator } from '#app/core/navigation/BottomSheetNavigator';

export const MapScreen = () => {
  const styles = useStyles();
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const initialSnapPoints = React.useMemo(() => ['25%', 'CONTENT_HEIGHT'], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
      >
        <BottomSheetNavigator />
      </BottomSheet>
    </View>
  );
};

const useStyles = () => {
  const insets = useSafeAreaInsets();
  return React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        contentContainer: {
          flex: 1,
          alignItems: 'center',
          paddingBottom: insets.bottom,
        },
        map: {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        },
      }),
    [insets],
  );
};
