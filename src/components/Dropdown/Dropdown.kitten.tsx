import React, { useEffect } from 'react';

import { IndexPath, Select, SelectItem, Text } from '@ui-kitten/components';

import { Data, DropdownProps } from '.';

export const Dropdown = ({
  label,
  selectedValue,
  data,
  onSelect,
}: DropdownProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0),
  );

  useEffect(() => {
    setSelectedIndex(
      new IndexPath(
        data.findIndex((item: Data) => item.value === selectedValue),
      ),
    );
  }, [data, selectedValue]);

  return data ? (
    <>
      <Text category="label">{label}</Text>
      <Select
        value={data[selectedIndex.row]?.label}
        onSelect={index => {
          if (!Array.isArray(index)) {
            onSelect(data[index.row]?.value);
          }
        }}
      >
        {data.map((item, i) => (
          <SelectItem key={item.value} title={item.label} />
        ))}
      </Select>
    </>
  ) : null;
};
