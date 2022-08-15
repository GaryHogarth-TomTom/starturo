import React from 'react';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { Box, Divider, Text, VStack } from 'native-base';

import { DrawerItemList } from './DrawerItemList';

export const DrawerContent = ({
  descriptors,
  state,
  ...rest
}: DrawerContentComponentProps) => {
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;
  const { drawerContentStyle, drawerContentContainerStyle } = focusedOptions;

  return (
    <DrawerContentScrollView
      {...rest}
      contentContainerStyle={drawerContentContainerStyle}
      style={drawerContentStyle}
    >
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Mail
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            <DrawerItemList descriptors={descriptors} state={state} {...rest} />
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
};
