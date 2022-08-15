import { DrawerNavigatorParams } from './navigators/LeftDrawerNavigator';
import { MainTabsNavigatorParams } from './navigators/MainTabsNavigator';
import { RootNavigatorParams } from './navigators/RootNavigator';

export type NavigatorParams = RootNavigatorParams &
  MainTabsNavigatorParams &
  DrawerNavigatorParams;

export { LeftDrawerNavigator } from './navigators/LeftDrawerNavigator';
export { MainTabsNavigator } from './navigators/MainTabsNavigator';
export { RootNavigator } from './navigators/RootNavigator';
