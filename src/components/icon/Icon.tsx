import * as React from 'react';

import { Entypo, Ionicons } from '@expo/vector-icons';
import { IIconProps, Icon as NBIcon } from 'native-base';

const ICONS = {
  home: {
    as: Ionicons,
    name: 'home-outline',
  },
  product: {
    as: Ionicons,
    name: 'home-outline',
  },
  preferences: {
    as: Ionicons,
    name: 'home-outline',
  },
};

type Props = IIconProps;

export const Icon = ({ name, ...rest }: IIconProps) => {
  if (!name) {
    return null;
  } else {
    return <NBIcon {...rest} {...ICONS.home} />;
  }
};
