import * as React from 'react';

import { Entypo } from '@expo/vector-icons';
import { HStack, Text, Pressable, useTheme, Icon, View } from 'native-base';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

type Props = {
  /**
   * The label text of the item.
   */
  label:
    | string
    | ((props: { focused: boolean; color: string }) => React.ReactNode);
  /**
   * Icon to display for the `DrawerItem`.
   */
  icon?: (props: {
    focused: boolean;
    size: number;
    color: string;
  }) => React.ReactNode;
  /**
   * Whether to highlight the drawer item as active.
   */
  focused?: boolean;
  /**
   * Function to execute on press.
   */
  onPress: () => void;
  /**
   * Whether label font should scale to respect Text Size accessibility settings.
   */
  allowFontScaling?: boolean;
  /**
   * Style object for the wrapper element.
   */
  style?: StyleProp<ViewStyle>;
};

/**
 * A component used to show an action item with an icon and a label in a navigation drawer.
 */
export const DrawerItem = (props: Props) => {
  const { colors } = useTheme();

  const {
    icon = props => <Icon as={Entypo} name="chevron-right" {...props} />,
    label,
    focused = false,
    allowFontScaling,
    onPress,
    style = {},
    ...rest
  } = props;

  const color = focused ? colors.primary[900] : colors.primary[800];

  const iconNode = icon ? icon({ size: 6, focused, color }) : null;

  return (
    <View style={style}>
      <Pressable px="5" py="3" rounded="md" onPress={onPress}>
        <HStack space="3" alignItems="center">
          {iconNode}
          {typeof label === 'string' ? (
            <Text
              numberOfLines={1}
              allowFontScaling={allowFontScaling}
              color={color}
              fontWeight={focused ? 'bold' : undefined}
            >
              {label}
            </Text>
          ) : (
            label({ color, focused })
          )}
        </HStack>
      </Pressable>
    </View>
  );
};
