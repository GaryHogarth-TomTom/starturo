import { useMemo } from 'react';

import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { StackHeaderProps, StackNavigationProp } from '@react-navigation/stack';
import {
  Avatar,
  Box,
  Hidden,
  HStack,
  Icon,
  IconButton,
  Image,
  Pressable,
  StatusBar,
  Text,
  useBreakpointValue,
} from 'native-base';
import { Platform } from 'react-native';
import { GravatarApi } from 'react-native-gravatar';

import { useAuth } from '#app/core/auth/hooks/useAuth';

export const AppBar = (_props: StackHeaderProps) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const { user } = useAuth();
  const onPressMenuButton = useBreakpointValue({
    base: () => navigation.dispatch(DrawerActions.toggleDrawer()),
    lg: () => {},
  });

  const onPressAvatarButton: () => void = useMemo(
    () =>
      user
        ? () => navigation.navigate('Account')
        : () => navigation.navigate('Account'),
    [user],
  );

  const avatarImage = useMemo(
    () =>
      user
        ? GravatarApi.imageUrl({
            email: user?.email,
            parameters: { size: '200' },
          })
        : null,
    [user],
  );
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Box
        safeAreaTop
        paddingRight={2}
        paddingTop={Platform.OS === 'web' ? 2 : 0}
        paddingBottom={4}
        borderBottomWidth={1}
        _light={{ borderBottomColor: 'coolGray.300' }}
        _dark={{ borderBottomColor: 'coolGray.600' }}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="2" alignItems="center">
            <Image
              ml="2"
              h="8"
              w="8"
              alt="Starturo"
              resizeMode="contain"
              source={require('#assets/logos/logo.png')}
            />
            <Hidden till="lg">
              <Text h="8" fontSize={20} fontWeight="900">
                Starturo
              </Text>
            </Hidden>
          </HStack>
          <HStack space="8" alignItems="center">
            <HStack space="2" alignItems="center">
              <IconButton
                variant="ghost"
                icon={<Icon size="6" as={Entypo} name={'share'} />}
              />
              <Pressable onPress={onPressAvatarButton}>
                <Avatar
                  w="8"
                  h="8"
                  backgroundColor="transparent"
                  borderWidth="1"
                  borderColor="coolGray.400"
                  source={
                    avatarImage
                      ? {
                          uri: avatarImage,
                        }
                      : undefined
                  }
                >
                  <Icon size="5" as={Ionicons} name={'person'} />
                </Avatar>
              </Pressable>
              <Hidden from="lg">
                <IconButton
                  variant="primary"
                  colorScheme="light"
                  onPress={onPressMenuButton}
                  icon={<Icon size="6" name="menu-sharp" as={Ionicons} />}
                />
              </Hidden>
            </HStack>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};
