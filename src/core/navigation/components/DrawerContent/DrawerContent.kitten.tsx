import React from 'react';

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Drawer, DrawerItem, Icon } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

export const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <Drawer>
        <DrawerItem
          title={t('screens.home')}
          onPress={() => navigation.navigate('Home')}
          accessoryLeft={props => <Icon {...props} name="home-outline" />}
        />
        <DrawerItem
          title={t('screens.profile')}
          onPress={() => navigation.navigate('Profile')}
          accessoryLeft={props => <Icon {...props} name="person-outline" />}
        />
        <DrawerItem
          title={t('screens.bookmarks')}
          onPress={() => navigation.navigate('Bookmarks')}
          accessoryLeft={props => <Icon {...props} name="bookmark-outline" />}
        />
        <DrawerItem
          title={t('screens.preferences')}
          onPress={() => navigation.navigate('Preferences')}
          accessoryLeft={props => <Icon {...props} name="settings-2-outline" />}
        />
      </Drawer>
    </SafeAreaView>
  );
};
