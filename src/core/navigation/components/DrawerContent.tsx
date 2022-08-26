import React, { useEffect } from 'react';

import { Entypo } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { Icon, VStack } from 'native-base';

import { useAuth } from '#app/core/auth/hooks/useAuth';

import { DrawerItem } from './DrawerItem';
import { DrawerItemList } from './DrawerItemList';

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { descriptors, state, navigation, ...rest } = props;
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;
  const { drawerContentStyle, drawerContentContainerStyle } = focusedOptions;
  const { user } = useAuth();

  return (
    <DrawerContentScrollView
      {...rest}
      contentContainerStyle={drawerContentContainerStyle}
      style={drawerContentStyle}
    >
      <VStack space="4" my="1" mx="1">
        <DrawerItem
          label={user ? user?.email : 'Sign In'}
          onPress={() => navigation.navigate('SignIn')}
        />
        <DrawerItemList {...props} />
      </VStack>
    </DrawerContentScrollView>
  );
};
