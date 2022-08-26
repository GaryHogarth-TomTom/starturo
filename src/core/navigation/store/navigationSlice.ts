import { Action, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '#app/core/store';

export interface NavigationState {
  isCompactDrawer: boolean;
}

export const initialState: NavigationState = {
  isCompactDrawer: true,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setIsCompactDrawer: (state, action: PayloadAction<boolean>) => {
      state.isCompactDrawer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsCompactDrawer } = navigationSlice.actions;

export const getIsCompactDrawer = (state: RootState): boolean =>
  state.navigation.isCompactDrawer;

export default navigationSlice.reducer;
