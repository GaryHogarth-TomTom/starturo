import React from 'react';

import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';

import { ThemingContext } from '#app//theming';

export const AppHeader = ({ scene }) => {
  const theme = useTheme();
  const { toggleDarkMode, isThemeDark } = React.useContext(ThemingContext);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      <Appbar.Content title={scene.route?.name} />
      <TouchableRipple onPress={() => toggleDarkMode()}>
        <Switch
          style={[{ backgroundColor: theme.colors.accent }]}
          color={'red'}
          value={isThemeDark}
        />
      </TouchableRipple>
    </Appbar.Header>
  );
};
