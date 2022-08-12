import React from 'react';

import { Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { Dropdown as DropDown } from 'react-native-element-dropdown';

import { DropdownProps } from '.';

export const Dropdown = ({
  label,
  selectedValue,
  data,
  onSelect,
}: DropdownProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return data ? (
    <View style={styles.container}>
      <Text style={[styles.label, isFocused && { color: 'blue' }]}>
        {label}
      </Text>
      <DropDown
        style={[styles.dropdown, isFocused && { borderColor: 'blue' }]}
        data={data}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={selectedValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={item => {
          onSelect(item.value);
          setIsFocused(false);
        }}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 8,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
