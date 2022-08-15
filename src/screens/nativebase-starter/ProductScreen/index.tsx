import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  StatusBar,
  Avatar,
  Image,
  Input,
  useColorMode,
  ScrollView,
  Pressable,
  Center,
  Divider,
  Button,
  IconButton,
  Stack,
  Link,
  Hidden,
  Menu,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const categories = [
  {
    category: 'New Born',
  },
  {
    category: 'Tiny Baby',
  },
  {
    category: '0-3 M',
  },
];

const reviews = [
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Laura Jones',
    time: '12 May 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Laura Jones',
    time: '02 Jan 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Rati Agarwal',
    time: '31 Aug 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
];
const AddToCartButton = (props: any) => {
  return (
    <HStack
      mt="5"
      space="4"
      alignItems="center"
      display={{
        base: props.base,
        md: props.md,
      }}
    >
      <Center
        p="2"
        borderRadius="4"
        _light={{ bg: 'primary.100' }}
        _dark={{ bg: 'coolGray.900' }}
      >
        <Icon
          size="8"
          name="heart"
          as={EvilIcons}
          _dark={{ color: 'violet.500' }}
          _light={{ color: 'primary.900' }}
        />
      </Center>
      <Button
        flex={1}
        h="100%"
        py={3}
        borderRadius="4"
        _dark={{ bg: 'violet.700' }}
        _light={{ bg: 'primary.900' }}
        _text={{ fontSize: 'md', fontWeight: 'semibold' }}
      >
        Add To Cart
      </Button>
    </HStack>
  );
};

export default function (props: any) {
  // add next router here
  const navigation = useNavigation();
  const [tabName, setTabName] = React.useState('Reviews');
  const { colorMode } = useColorMode();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box _light={{ bg: 'primary.900' }} _dark={{ bg: 'coolGray.900' }} />
      <VStack
        flex={1}
        _light={{ bg: 'primary.50' }}
        _dark={{ bg: 'customGray' }}
      >
        <Box
          flex={1}
          flexDirection={{ base: 'column', md: 'row' }}
          _light={{
            borderTopColor: 'coolGray.200',
          }}
          _dark={{
            bg: 'coolGray.800',
            borderTopColor: 'coolGray.700',
          }}
        >
          <ScrollView
            flex={1}
            p={{ md: 8 }}
            contentContainerStyle={{
              alignItems: 'center',
              flex: 1,
            }}
          >
            <VStack maxW="1016px" flex={1} width="100%">
              <Hidden till="md">
                <HStack mb="4" space={2}>
                  <Pressable>
                    <Icon
                      size="6"
                      as={AntDesign}
                      name={'arrowleft'}
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.50' }}
                    />
                  </Pressable>
                  <Text
                    fontSize="lg"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Body Suit
                  </Text>
                </HStack>
              </Hidden>

              <Stack
                flex={1}
                p={{ md: '8' }}
                _light={{ bg: 'white' }}
                _dark={{
                  borderColor: 'coolGray.700',
                  bg: { md: 'coolGray.900', base: 'coolGray.800' },
                }}
                borderWidth={1}
                borderColor="#E5E7EB"
                borderRadius={8}
                direction={{ base: 'column', md: 'row' }}
                space="6"
              >
                <Box
                  p="2"
                  bg="primary.100"
                  borderRadius="md"
                  alignItems="center"
                  w={{ base: '100%', md: '50%' }}
                  h={{ base: '40%', md: 'auto' }}
                  pr={{ base: '2', md: '4' }}
                  justifyContent="center"
                >
                  <Image
                    width="full"
                    height={{ base: 'full', md: 'full' }}
                    rounded="lg"
                    alt="Alternate Text"
                    source={require('./components/baby-clothes.jpg')}
                  />
                </Box>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Box flex={1} px={{ base: '4' }}>
                    <VStack space={1}>
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Text
                          fontSize="lg"
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'coolGray.50' }}
                        >
                          Body Suit
                        </Text>
                        <HStack alignItems="center" space="1">
                          <Icon
                            size="4"
                            name={'star'}
                            as={AntDesign}
                            color="amber.400"
                          />
                          <Text
                            fontSize="md"
                            _light={{ color: 'coolGray.800' }}
                            _dark={{ color: 'coolGray.50' }}
                          >
                            4.9
                          </Text>
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            _light={{ color: 'coolGray.400' }}
                            _dark={{ color: 'coolGray.300' }}
                          >
                            (120)
                          </Text>
                        </HStack>
                      </HStack>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="coolGray.400"
                      >
                        Mother care
                      </Text>
                      <Text
                        fontSize="xl"
                        fontWeight="medium"
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        ₹500
                      </Text>
                    </VStack>

                    <HStack space="2" mt="5" alignItems="center">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        _dark={{ color: 'coolGray.50' }}
                        _light={{ color: 'coolGray.800' }}
                      >
                        Select Size
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="coolGray.400"
                      >
                        (Age Group)
                      </Text>
                      <Link
                        ml="auto"
                        _text={{ textDecoration: 'none' }}
                        _light={{
                          _text: {
                            color: 'primary.800',
                            fontSize: 'sm',
                            fontWeight: 'medium',
                          },
                        }}
                        _dark={{
                          _text: {
                            color: 'primary.400',
                            fontSize: 'sm',
                            fontWeight: 'medium',
                          },
                        }}
                      >
                        Size Chart
                      </Link>
                    </HStack>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <Button.Group space="2" mt={3} alignItems="center">
                        {categories.map((item: any) => {
                          return (
                            <Button
                              py="4"
                              px="5"
                              borderRadius="4"
                              variant="subtle"
                              _text={{
                                _dark: { color: 'coolGray.50' },
                                _light: { color: 'coolGray.800' },
                                fontWeight: 'normal',
                              }}
                              //@ts-ignore
                              _light={{ colorScheme: 'primary' }}
                              _dark={{
                                bg: 'coolGray.900',
                                //@ts-ignore
                                colorScheme: 'dark',
                              }}
                            >
                              {item.category}
                            </Button>
                          );
                        })}
                      </Button.Group>
                    </ScrollView>
                    <AddToCartButton base="none" md="flex" />
                    <HStack mt="8" space="5">
                      <Pressable
                        onPress={() => {
                          setTabName('Description');
                        }}
                      >
                        <Text
                          fontSize="16"
                          fontWeight="medium"
                          letterSpacing="0.4"
                          _light={{
                            color:
                              tabName == 'Description'
                                ? 'primary.900'
                                : 'coolGray.400',
                          }}
                          _dark={{
                            color:
                              tabName == 'Description'
                                ? 'coolGray.50'
                                : 'coolGray.400',
                          }}
                        >
                          Description
                        </Text>
                        {tabName == 'Description' ? (
                          <Box width="100%" py="1">
                            <Divider bg="primary.900" />
                          </Box>
                        ) : (
                          <></>
                        )}
                      </Pressable>
                      <Pressable
                        onPress={() => {
                          setTabName('Reviews');
                        }}
                      >
                        <Text
                          fontSize="16"
                          fontWeight="medium"
                          letterSpacing="0.4"
                          _light={{
                            color:
                              tabName == 'Reviews'
                                ? 'primary.900'
                                : 'coolGray.400',
                          }}
                          _dark={{
                            color:
                              tabName == 'Reviews'
                                ? 'coolGray.50'
                                : 'coolGray.400',
                          }}
                        >
                          Reviews
                        </Text>
                        {tabName == 'Reviews' ? (
                          <Box width="100%" py="1">
                            <Divider bg="primary.900" />
                          </Box>
                        ) : (
                          <></>
                        )}
                      </Pressable>
                    </HStack>
                    {tabName === 'Description' ? (
                      <Text
                        mt="3"
                        fontSize="sm"
                        lineHeight="lg"
                        fontWeight="medium"
                        letterSpacing="0.3"
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        Yellow bodysuit, has a round neck with envelope detail
                        along the shoulder, short sleeves and snap button
                        closures along the crotch.Your Body suit has a round
                        neck with detail along the shoulder,short sleeves and
                        snap button closer along the front.
                      </Text>
                    ) : (
                      reviews.map((item: any, idx: number) => {
                        return (
                          <VStack my="3" px="4" key={idx}>
                            <HStack justifyContent="space-between">
                              <HStack space="3">
                                <Avatar
                                  source={{
                                    uri: item.imageUrl,
                                  }}
                                  height="9"
                                  width="9"
                                />
                                <VStack space="1">
                                  <Text
                                    fontSize="sm"
                                    fontWeight="semibold"
                                    _dark={{ color: 'coolGray.50' }}
                                    _light={{ color: 'coolGray.800' }}
                                  >
                                    {item.name}
                                  </Text>
                                  <HStack space="1">
                                    <Icon
                                      size="4"
                                      name="star"
                                      as={AntDesign}
                                      color="amber.400"
                                    />
                                  </HStack>
                                </VStack>
                              </HStack>
                              <Text
                                fontSize="sm"
                                _light={{ color: 'coolGray.500' }}
                                _dark={{ color: 'coolGray.300' }}
                              >
                                {item.time}
                              </Text>
                            </HStack>
                            <Text
                              alignItems="center"
                              lineHeight="lg"
                              mt="4"
                              _light={{ color: 'coolGray.500' }}
                              _dark={{ color: 'coolGray.300' }}
                              fontSize="md"
                            >
                              {item.review}
                            </Text>
                          </VStack>
                        );
                      })
                    )}
                    <AddToCartButton base="flex" md="none" />
                  </Box>
                </ScrollView>
              </Stack>
            </VStack>
          </ScrollView>
        </Box>
      </VStack>
    </>
  );
}
