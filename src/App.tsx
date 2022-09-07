import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'react-native-gesture-handler';
import OneSignal from 'react-native-onesignal';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as AuthClientProvider } from 'react-supabase';
import { PersistGate } from 'redux-persist/integration/react';

import { AuthProvider } from '#app/core/auth';
import { i18nConfig } from '#app/core/i18n';
import { store, persistor } from '#app/core/store';

import { RootView } from './RootView';

OneSignal.setAppId(Constants?.manifest?.extra?.oneSignalAppId);

const supabaseUrl = Constants?.manifest?.extra?.supabaseUrl;
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseAnonKey = Constants?.manifest?.extra?.supabaseAnonKey;

export default function App() {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(i18nConfig);
  const authClient = createClient(supabaseUrl, supabaseAnonKey, {
    localStorage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  });

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthClientProvider value={authClient}>
          <AuthProvider>
            <StatusBar style="auto" />
            <RootView />
          </AuthProvider>
        </AuthClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
