import { FontAwesome, Feather, Entypo, Ionicons } from '@expo/vector-icons';
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AppBar = ({ navigation: _navigation }: StackHeaderProps) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const { top } = useSafeAreaInsets();
  const onPressMenuButton = useBreakpointValue({
    base: () => navigation.dispatch(DrawerActions.toggleDrawer()),
    lg: () => {},
  });
  const onPressAvatarButton = useBreakpointValue({
    base: () => navigation.dispatch(DrawerActions.toggleDrawer()),
  });
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Box
        safeAreaTop
        paddingRight={2}
        paddingBottom={4}
        borderBottomWidth={1}
        _light={{ borderBottomColor: 'coolGray.300' }}
        _dark={{ borderBottomColor: 'coolGray.600' }}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="2" alignItems="center">
            <Hidden from="lg">
              <IconButton
                variant="ghost"
                colorScheme="light"
                onPress={onPressMenuButton}
                icon={
                  <Icon
                    size="6"
                    name="menu-sharp"
                    as={Ionicons}
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  />
                }
              />
            </Hidden>
            <Image
              h="8"
              w="8"
              alt="Starturo"
              resizeMode="contain"
              source={require('#assets/logos/logo.png')}
            />
            <Hidden till="lg">
              <Text h="10" fontSize={20} fontWeight="900">
                Starturo
              </Text>
            </Hidden>
          </HStack>
          <HStack space="8" alignItems="center">
            <HStack space="2" alignItems="center">
              <IconButton
                icon={
                  <Icon
                    size="6"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.400' }}
                    as={Entypo}
                    name={'share'}
                  />
                }
              />
              <IconButton
                icon={
                  <Icon
                    size="6"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.400' }}
                    as={Feather}
                    name={'shopping-cart'}
                  />
                }
              />
              <Pressable onPress={onPressAvatarButton}>
                <Avatar
                  w="8"
                  h="8"
                  borderWidth="2"
                  _dark={{ borderColor: 'primary.700' }}
                  source={{
                    uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                />
              </Pressable>
            </HStack>
            {/* 
            <Menu
              closeOnSelect={false}
              w="190"
              onOpen={() => console.log('opened')}
              onClose={() => console.log('closed')}
              trigger={triggerProps => {
                return (
                  <Pressable {...triggerProps}>
                    <Avatar
                      w="8"
                      h="8"
                      borderWidth="2"
                      _dark={{ borderColor: 'primary.700' }}
                      source={{
                        uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                      }}
                    />
                  </Pressable>
                );
              }}
            >
              <Menu.Group title="Profile">
                <Menu.Item>Account</Menu.Item>
                <Menu.Item>Billing</Menu.Item>
                <Menu.Item>Security</Menu.Item>
              </Menu.Group>
              <Divider mt="3" w="100%" />
              <Menu.Group title="Shortcuts">
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </Menu.Group>
            </Menu> */}
          </HStack>
        </HStack>
      </Box>
    </>
  );
};
