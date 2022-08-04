import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '#app/core/store';

export type ThemeMode = 'dark' | 'light';
export type ThemeModeOption = ThemeMode | 'system';
export type ThemePack = 'default' | 'nature';
export interface ThemeState {
  themeMode: ThemeModeOption;
  themePack: ThemePack;
}

const initialState: ThemeState = {
  themeMode: 'system',
  themePack: 'default',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeModeOption>) => {
      state.themeMode = action.payload;
    },
    setThemePack: (state, action: PayloadAction<ThemePack>) => {
      state.themePack = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setThemeMode, setThemePack } = themeSlice.actions;

export const getThemePack = (state: RootState): ThemePack =>
  state.theme.themePack;
export const getThemeMode = (state: RootState): ThemeModeOption =>
  state.theme.themeMode;

export default themeSlice.reducer;
