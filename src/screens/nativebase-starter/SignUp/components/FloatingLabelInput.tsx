import React, { Component, useEffect, useState } from 'react';

import { Input, Box } from 'native-base';
import { Animated } from 'react-native';
import { Platform } from 'react-native';
import {
  Extrapolation,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';

export const FloatingLabelInput = ({ label, ...props }) => {
  const animatedIsFocused = useSharedValue(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    animatedIsFocused.value = isFocused ? 1 : 0;
  }, [isFocused]);

  const lableContainerStyles = {
    position: 'absolute',
    left: 16,
    top: interpolate(animatedIsFocused.value, [0, 1], [12, -7], {
      extrapolateRight: Extrapolation.CLAMP,
    }),
    zIndex: 5,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: props.labelBGColor,
  } as any;
  const AndroidlabelStyle = {
    fontWeight: '500',
    fontSize: interpolate(animatedIsFocused.value, [0, 1], [14, 12], {
      extrapolateRight: Extrapolation.CLAMP,
    }),

    color: props.labelColor,
  } as any;
  const IOSlabelStyle = {
    fontWeight: '500',
    fontSize: interpolate(animatedIsFocused.value, [0, 1], [14, 12], {
      extrapolateRight: Extrapolation.CLAMP,
    }),
    marginTop: interpolate(animatedIsFocused.value, [0, 1], [-3, 0], {
      extrapolateRight: Extrapolation.CLAMP,
    }),
    color: props.labelColor,
  } as any;
  return (
    <Box w={props.containerWidth}>
      <Animated.View pointerEvents="none" style={lableContainerStyles}>
        <Animated.Text
          style={Platform.OS === 'android' ? AndroidlabelStyle : IOSlabelStyle}
        >
          {label}
        </Animated.Text>
      </Animated.View>
      <Input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        _hover={{ bg: props.labelBGColor }}
      />
    </Box>
  );
};
