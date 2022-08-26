import React from 'react';

import { CheckIcon, FormControl, Select } from 'native-base';

export type Data = {
  label: string;
  value: string;
};
export type DropdownProps = {
  label: string;
  data: Data[];
  selectedValue: string;
  onSelect: (newValue: any) => void;
};
export const Dropdown = ({
  label,
  selectedValue,
  data,
  onSelect,
}: DropdownProps) => {
  return data ? (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Select
        selectedValue={selectedValue}
        accessibilityLabel={label}
        placeholder={label}
        _selectedItem={{
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={itemValue => onSelect(itemValue)}
      >
        {data.map((item: Data) => (
          <Select.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Select>
    </FormControl>
  ) : null;
};
