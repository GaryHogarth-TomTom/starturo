import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
  BottomNavigationTabElement,
  useStyleSheet,
  StyleService,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const BottomTabBar = (props: BottomTabBarProps) => {
  const styles = useStyleSheet(themedStyles);
  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (
    route: any,
  ): BottomNavigationTabElement => {
    const { options } = props.descriptors[route.key];
    return (
      <BottomNavigationTab
        key={route.key}
        title={options.title}
        // @ts-expect-error
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Divider />
      <BottomNavigation
        style={styles.navigationContainer}
        selectedIndex={props.state.index}
        onSelect={onSelect}
      >
        {props.state.routes.map(createNavigationTabForRoute)}
      </BottomNavigation>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-2',
  },
  navigationContainer: {
    paddingVertical: 8,
    backgroundColor: 'background-basic-color-2',
  },
});
