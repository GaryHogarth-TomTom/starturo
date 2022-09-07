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

const supabaseUrl = 'https://vdlrflkjzlqagzcuyluq.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkbHJmbGtqemxxYWd6Y3V5bHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA1NTM2NTEsImV4cCI6MTk3NjEyOTY1MX0.Bful4szvCrz7grRryeHDjjnzu6rx96lR1Dud2jp71vY';

export default function App() {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    //@ts-ignore
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
