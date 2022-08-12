import { MainTabsNavigatorParams } from './navigators/MainTabsNavigator';
import { RootNavigatorParams } from './navigators/RootNavigator';

export type NavigatorParams = RootNavigatorParams & MainTabsNavigatorParams;

export { MainTabsNavigator } from './navigators/MainTabsNavigator';
export { RootNavigator } from './navigators/RootNavigator';
