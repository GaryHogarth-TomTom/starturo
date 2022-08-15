import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Center, useBreakpointValue } from 'native-base';

import ProductScreen from '#app/screens/nativebase-starter/ProductScreen';
import { SignInForm } from '#app/screens/nativebase-starter/SignIn';

import { AppBar } from '../components/AppBar';
import { DrawerContent } from '../components/DrawerContent';
import { TabBar } from '../components/TabBar';
import { MainTabsNavigator } from './MainTabsNavigator';

export type DrawerNavigatorParams = {
  Tabs: undefined;
  Product: undefined;
  SignIn: undefined;
  AccountDrawer: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParams>();

export const LeftDrawerNavigator = () => {
  const drawerType = useBreakpointValue({
    md: 'slide',
    lg: 'permanent',
  });
  const overlayColor = useBreakpointValue({
    md: null,
    lg: 'transparent',
  });
  return (
    <>
      <Drawer.Navigator
        id="LeftDrawer"
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
          drawerType,
          overlayColor,
        }}
        drawerContent={(props: DrawerContentComponentProps) => (
          <DrawerContent {...props} />
        )}
      >
        <Drawer.Screen
          name="Tabs"
          options={{ title: 'Home' }}
          component={MainTabsNavigator}
        />
        <Drawer.Screen
          name="Product"
          options={{ title: 'Shop' }}
          component={ProductScreen}
        />
        <Drawer.Screen
          name="SignIn"
          options={{ title: 'Account' }}
          component={SignInForm}
        />
      </Drawer.Navigator>
    </>
  );
};
