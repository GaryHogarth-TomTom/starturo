import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { getUXLibrary } from '#app/core/theming';
import { UXLibrary } from '#app/core/theming/config';

import { MainTabsNavigator as Elements } from './MainTabsNavigator.elements';
import { MainTabsNavigator as Kitten } from './MainTabsNavigator.kitten';
import { MainTabsNavigator as NativeBase } from './MainTabsNavigator.nativebase';
import { MainTabsNavigator as Paper } from './MainTabsNavigator.paper';

const Components = {
  kitten: Kitten,
  paper: Paper,
  elements: Elements,
  nativebase: NativeBase,
};

export type MainTabsNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Preferences: undefined;
  Bookmarks: undefined;
};

export const MainTabsNavigator = (props: BottomTabBarProps) => {
  const uxLibrary: UXLibrary = useSelector(getUXLibrary);
  const Component = React.useMemo(
    () =>
      Components.hasOwnProperty(uxLibrary)
        ? Components[uxLibrary]
        : Components['paper'],
    [uxLibrary],
  );
  // @ts-expect-error
  return <Component {...props} />;
};
