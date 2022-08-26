import React from 'react';

import { Divider, HStack, Text } from 'native-base';

type Props = {
  text: string;
};

export const DividerWithText = ({ text }: Props) => {
  return (
    <HStack
      mt="5"
      space="2"
      mb={{ base: 6, md: 7 }}
      alignItems="center"
      justifyContent="center"
    >
      <Divider
        w="30%"
        _light={{ bg: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.700' }}
      />
      <Text
        fontWeight="medium"
        _light={{ color: 'coolGray.300' }}
        _dark={{ color: 'coolGray.500' }}
      >
        {text}
      </Text>
      <Divider
        w="30%"
        _light={{ bg: 'coolGray.200' }}
        _dark={{ bg: 'coolGray.700' }}
      />
    </HStack>
  );
};
