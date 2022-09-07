import * as React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { IIconProps, Icon as NBIcon } from 'native-base';

const ICONS = {
  home: {
    as: Ionicons,
    name: 'home-outline',
  },
  product: {
    as: Ionicons,
    name: 'basket-outline',
  },
  profile: {
    as: Ionicons,
    name: 'person-outline',
  },
  preferences: {
    as: Ionicons,
    name: 'settings-outline',
  },
  bookmarks: {
    as: Ionicons,
    name: 'bookmarks-outline',
  },
};

type IconProps = IIconProps & {
  name: 'home' | 'product' | 'profile' | 'preferences' | 'bookmarks';
};

export const Icon = ({ name, ...rest }: IconProps) => {
  if (!name) {
    return null;
  } else {
    const icon = ICONS[name] ?? ICONS.home;
    return <NBIcon {...rest} {...ICONS[name]} />;
  }
};
