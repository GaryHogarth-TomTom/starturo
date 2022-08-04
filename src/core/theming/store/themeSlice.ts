import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '#app/core/store';

export interface ThemeState {
  darkMode: boolean;
  theme: string;
}

const initialState: ThemeState = {
  darkMode: false,
  theme: 'default',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode, changeTheme, setDarkMode } = themeSlice.actions;

export const getTheme = (state: RootState): string => state.theme.theme;
export const getIsDarkModeEnabled = (state: RootState): boolean =>
  state.theme.darkMode;

export default themeSlice.reducer;
