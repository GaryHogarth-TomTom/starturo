import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useBreakpointValue } from 'native-base';
import { useTranslation } from 'react-i18next';

import { Icon } from '#app/components/icon/Icon';
import { useAuth } from '#app/core/auth/hooks/useAuth';
import { PreferencesScreen } from '#app/screens/PreferencesScreen';

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
  const drawerStyle = { width: 320 };

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
          drawerIcon: props => <Icon name="home" {...props} />,
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          title: user ? t('screens.profile') : t('screens.signin'),
          drawerItemStyle: { height: 0, overflow: 'hidden' },
          drawerIcon: props => <Icon name="profile" {...props} />,
        }}
      />
      <Drawer.Screen
        name="Preferences"
        options={{
          title: t('screens.preferences'),
          drawerIcon: props => <Icon name="preferences" {...props} />,
        }}
        component={PreferencesScreen}
      />
    </Drawer.Navigator>
  );
};
