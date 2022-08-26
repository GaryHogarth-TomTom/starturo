import React from 'react';

import { ILinkProps } from 'native-base';

import { Link } from './Link';

export const LinkSmall = ({ children, ...props }: ILinkProps) => {
  return (
    <Link
      {...props}
      _text={{
        fontSize: 'xs',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  );
};
