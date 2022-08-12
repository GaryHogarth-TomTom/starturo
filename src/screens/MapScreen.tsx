import * as React from 'react';

import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const MapScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
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
