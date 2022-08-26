import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '#app/core/store';

import { ThemeModeOption, ThemePack, UXLibrary } from '../config';

export interface ThemeState {
  themeMode: ThemeModeOption;
}

export const initialState: ThemeState = {
  themeMode: 'system',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeModeOption>) => {
      state.themeMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setThemeMode } = themeSlice.actions;

export const getThemeMode = (state: RootState): ThemeModeOption =>
  state.theme.themeMode;

export default themeSlice.reducer;
