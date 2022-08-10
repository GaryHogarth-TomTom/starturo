import React from 'react';

import DropDown from 'react-native-paper-dropdown';

import { DropdownProps } from '.';

export const Dropdown = ({
  label,
  selectedValue,
  data,
  onSelect,
}: DropdownProps) => {
  const [showDropDown, setShowDropDown] = React.useState(false);

  return data ? (
    <DropDown
      label={label}
      mode={'outlined'}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={selectedValue}
      setValue={onSelect}
      list={data}
    />
  ) : null;
};
