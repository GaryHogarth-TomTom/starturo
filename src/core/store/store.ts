import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import i18nReducer, {
  initialState as i18nInitialState,
} from '#app/core/i18n/store/i18nSlice';
import navigationReducer, {
  initialState as navigationInitialState,
} from '#app/core/navigation/store/navigationSlice';
import themeReducer, {
  initialState as themeInitialState,
} from '#app/core/theming/store/themeSlice';

export const RootReducer = {
  theme: themeReducer,
  i18n: i18nReducer,
  navigation: navigationReducer,
};

export const initialState = {
  theme: themeInitialState,
  i18n: i18nInitialState,
  navigation: navigationInitialState,
};

const rootReducer = combineReducers(RootReducer);

const persistConfig = {
  key: 'starturo',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['theme', 'i18n'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
