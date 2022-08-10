import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '#app/core/store';

import { ThemeModeOption, ThemePack, UXLibrary } from '../config';

export interface ThemeState {
  themeMode: ThemeModeOption;
  themePack: ThemePack;
  uxLibrary: UXLibrary;
}

const initialState: ThemeState = {
  themeMode: 'system',
  themePack: 'default',
  uxLibrary: 'kitten',
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
    setUXLibrary: (state, action: PayloadAction<UXLibrary>) => {
      state.uxLibrary = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setThemeMode, setThemePack, setUXLibrary } = themeSlice.actions;

export const getThemePack = (state: RootState): ThemePack =>
  state.theme.themePack;

export const getThemeMode = (state: RootState): ThemeModeOption =>
  state.theme.themeMode;

export const getUXLibrary = (state: RootState): UXLibrary =>
  state.theme.uxLibrary;

export default themeSlice.reducer;
