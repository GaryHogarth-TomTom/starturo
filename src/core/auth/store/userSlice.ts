import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import * as Localization from 'expo-localization';

import { RootState } from '#app/core/store';

export interface UserState {
  showAds: boolean;
}

export const initialState: UserState = {
  showAds: true,
};

export const i18nSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setShowAds: (state, action: PayloadAction<boolean>) => {
      state.showAds = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowAds } = i18nSlice.actions;

export const getShowAds = (state: RootState): boolean => state.user.showAds;

export default i18nSlice.reducer;
