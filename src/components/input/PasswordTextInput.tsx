import React, { useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import { Icon, IconButton } from 'native-base';

import { TextInput, TextInputProps } from './TextInput';

type PasswordTextInputProps = TextInputProps;

export const PasswordTextInput = (props: PasswordTextInputProps) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <TextInput
      {...props}
      type={showPass ? 'text' : 'password'}
      InputRightElement={
        <IconButton
          variant="unstyled"
          icon={
            <Icon
              size="4"
              color="coolGray.400"
              as={Entypo}
              name={showPass ? 'eye-with-line' : 'eye'}
            />
          }
          onPress={() => {
            setShowPass(!showPass);
          }}
        />
      }
    />
  );
};
