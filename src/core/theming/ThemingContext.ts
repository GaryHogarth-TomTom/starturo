import React from 'react';

export const ThemingContext = React.createContext({
  toggleDarkMode: () => {},
  isThemeDark: false,
  setTheme: (theme: string) => {},
  themeName: 'default',
});
