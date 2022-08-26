import React from 'react';

import { Link as NbLink, ILinkProps } from 'native-base';

export const Link = ({ children, ...props }: ILinkProps) => {
  return (
    <NbLink
      {...props}
      _text={{
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
      _light={{
        _text: {
          color: 'primary.900',
        },
      }}
      _dark={{
        _text: {
          color: 'primary.500',
        },
      }}
    >
      {children}
    </NbLink>
  );
};
