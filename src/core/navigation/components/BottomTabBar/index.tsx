import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { getUXLibrary } from '#app/core/theming';
import { UXLibrary } from '#app/core/theming/config';

import { BottomTabBar as Elements } from './BottomTabBar.elements';
import { BottomTabBar as Kitten } from './BottomTabBar.kitten';
import { BottomTabBar as Paper } from './BottomTabBar.paper';

const Components = {
  kitten: Kitten,
  paper: Elements,
  elements: Paper,
};

export const BottomTabBar = (props: BottomTabBarProps) => {
  const uxLibrary: UXLibrary = useSelector(getUXLibrary);
  const Component = React.useMemo(
    () =>
      Components.hasOwnProperty(uxLibrary)
        ? Components[uxLibrary]
        : Components['paper'],
    [uxLibrary],
  );
  return <Component {...props} />;
};
