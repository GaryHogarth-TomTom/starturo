import React from 'react';

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  NavigationState,
  useRoute,
} from '@react-navigation/native';
import {
  Drawer,
  DrawerItem,
  IndexPath,
  Text,
  Icon,
  DrawerGroup,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';

const BellIcon = props => <Icon {...props} name="bell-outline" />;
const SmartphoneIcon = props => <Icon {...props} name="smartphone-outline" />;

const BrowserIcon = props => <Icon {...props} name="browser-outline" />;

const ColorPaletteIcon = props => (
  <Icon {...props} name="color-palette-outline" />
);

const StarIcon = props => <Icon {...props} name="star" />;

export const DrawerContent = ({
  navigation,
  state,
}: DrawerContentComponentProps) => {
  console.log(state);
  console.log(
    getFocusedRouteNameFromRoute(
      state.routes[state.index] ?? state.routes[state.index],
    ),
  );
  return (
    <SafeAreaView>
      <Drawer>
        <DrawerGroup
          title="test"
          accessoryLeft={SmartphoneIcon}
          onPress={() => {}}
          selected={state.routeName == 'Profile'}
        >
          <DrawerItem
            onPress={() => navigation.navigate('Profile')}
            title="UI Kitten"
            accessoryLeft={StarIcon}
            selected={state.routeName == 'Profile'}
          />
          <DrawerItem
            onPress={() => {}}
            title="Kitten Tricks"
            accessoryLeft={StarIcon}
          />
          <DrawerItem
            title="Tab App"
            onPress={() => navigation.navigate('MainTabs')}
            accessoryLeft={props => <Icon {...props} name="home-outline" />}
          />
        </DrawerGroup>
        <DrawerItem
          title="Map App"
          onPress={() => navigation.navigate('Map')}
          accessoryLeft={props => <Icon {...props} name="map-outline" />}
        />
        <DrawerItem
          onPress={() => {}}
          title={evaProps => <Text {...evaProps}>USERS</Text>}
        ></DrawerItem>
      </Drawer>
    </SafeAreaView>
  );
};
