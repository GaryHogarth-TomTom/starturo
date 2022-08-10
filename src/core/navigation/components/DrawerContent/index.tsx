import React from 'react';

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

import { getUXLibrary } from '#app/core/theming';
import { UXLibrary } from '#app/core/theming/config';

import { DrawerContent as Elements } from './DrawerContent.elements';
import { DrawerContent as Kitten } from './DrawerContent.kitten';
import { DrawerContent as Paper } from './DrawerContent.paper';

const Components = {
  kitten: Kitten,
  paper: Paper,
  elements: Elements,
};

export const DrawerContent = (props: DrawerContentComponentProps) => {
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
