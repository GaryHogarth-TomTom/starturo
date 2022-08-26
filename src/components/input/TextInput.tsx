import React, { useState } from 'react';

import { Input, Box, Text, IInputProps } from 'native-base';

export type TextInputProps = IInputProps & {
  label: string;
  isRequired: boolean;
};

export const TextInput = ({
  label,
  isRequired = false,
  ...props
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  //   const show
  return (
    <Box>
      <Text>{label}</Text>
      <Input
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        borderRadius={32}
        _dark={{
          borderColor: 'coolGray.700',
        }}
        _light={{
          borderColor: 'coolGray.300',
        }}
        {...props}
      />
    </Box>
  );
};
