import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  Switch,
} from 'react-native-paper';

import { ThemingContext } from '#app/features/core/theming';

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { toggleTheme, isThemeDark } = React.useContext(ThemingContext);
  const { t } = useTranslation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: 'https://www.gravatar.com/avatar/b25a6fc8061e9b5b208435df2de4c062',
            }}
            size={50}
          />
          <Title style={styles.title}>Gary Hogarth</Title>
          <Caption style={styles.caption}>@garyhogarth</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label={t('screens.profile')}
            onPress={() => props.navigation.navigate('Profile')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label={t('screens.preferences')}
            onPress={() => props.navigation.navigate('Preferences')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label={t('screens.bookmarks')}
            onPress={() => props.navigation.navigate('Bookmarks')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                color={color}
                size={size}
              />
            )}
            label={t('screens.list')}
            onPress={() => props.navigation.navigate('List')}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View>
              <Switch value={isThemeDark} onValueChange={toggleTheme} />
            </View>
          </View>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
