import React from 'react';

import { StatusBar } from 'expo-status-bar';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { i18nConfig } from '#app/core/i18n';
import { store, persistor } from '#app/core/store';

import { RootView } from './RootView';

export default function App() {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(i18nConfig);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="auto" />
        <RootView />
      </PersistGate>
    </Provider>
  );
}
