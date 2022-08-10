import React from 'react';

import { useSelector } from 'react-redux';

import { getUXLibrary } from '#app/core/theming';
import { UXLibrary } from '#app/core/theming/config';

import { Dropdown as Elements } from './Dropdown.elements';
import { Dropdown as Kitten } from './Dropdown.kitten';
import { Dropdown as Paper } from './Dropdown.paper';

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

const Components = {
  kitten: Kitten,
  paper: Paper,
  elements: Elements,
};

export const Dropdown = (props: DropdownProps) => {
  const uxLibrary: UXLibrary = useSelector(getUXLibrary);
  const Component = React.useMemo(
    () =>
      Components.hasOwnProperty(uxLibrary)
        ? Components[uxLibrary]
        : Components['paper'],
    [uxLibrary],
  );
  return <Component {...props} />;
};
