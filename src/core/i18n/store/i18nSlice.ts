import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as Localization from 'expo-localization';

import { RootState } from '#app/core/store';

export interface I18nState {
  language: string;
}

const initialState: I18nState = {
  language: Localization.locale,
};

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage } = i18nSlice.actions;

export const getLanguage = (state: RootState): string => state.i18n.language;

export default i18nSlice.reducer;
