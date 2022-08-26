import React from 'react';

import { Entypo, Ionicons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Icon, useBreakpointValue } from 'native-base';
import { useTranslation } from 'react-i18next';

import { useAuth } from '#app/core/auth/hooks/useAuth';
import { SignIn } from '#app/core/auth/screens/SignIn';
import { PreferencesScreen } from '#app/screens/PreferencesScreen';
import ProductScreen from '#app/screens/nativebase-starter/ProductScreen';
import { SignUp } from '#app/screens/nativebase-starter/SignUp';

import { DrawerContent } from '../components/DrawerContent';
import { AccountNavigator } from './AccountNavigator';
import { MainTabsNavigator } from './MainTabsNavigator';

export type DrawerNavigatorParams = {
  Tabs: undefined;
  Product: undefined;
  Account: undefined;
  Preferences: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParams>();

export const LeftDrawerNavigator = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const drawerStatus = useBreakpointValue({
    base: 'closed',
    xl: 'open',
  });
  const overlayColor = useBreakpointValue({
    base: null,
    lg: 'transparent',
  });
  const drawerType = useBreakpointValue({
    base: 'front',
    lg: 'permanent',
  });
  const drawerStyle = useBreakpointValue({
    base: undefined,
    lg: {
      width: 200,
    },
  });

  return (
    <Drawer.Navigator
      id="LeftDrawer"
      initialRouteName="Tabs"
      defaultStatus={drawerStatus}
      screenOptions={{
        headerShown: false,
        drawerType,
        overlayColor,
        drawerStyle,
      }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}
    >
      <Drawer.Screen
        name="Tabs"
        component={MainTabsNavigator}
        options={{
          title: t('screens.home'),
          drawerIcon: props => (
            <Icon as={Ionicons} name="home-outline" {...props} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          title: user ? t('screens.profile') : t('screens.signin'),
          drawerIcon: props => (
            <Icon as={Ionicons} name="person-outline" {...props} />
          ),
        }}
      />
      <Drawer.Screen
        name="Preferences"
        options={{
          title: t('screens.preferences'),
          drawerIcon: props => (
            <Icon as={Ionicons} name="settings-outline" {...props} />
          ),
        }}
        component={PreferencesScreen}
      />
    </Drawer.Navigator>
  );
};
