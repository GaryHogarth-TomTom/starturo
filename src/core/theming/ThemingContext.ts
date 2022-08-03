import React from 'react';

export const ThemingContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
