import React, { useState } from 'react';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HStack, VStack, Text, Checkbox, Button, useToast } from 'native-base';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSignIn, useSignOut, useSignUp } from 'react-supabase';

import { PasswordTextInput } from '#app/components/input/PasswordTextInput';
import { TextInput } from '#app/components/input/TextInput';
import { Link } from '#app/components/links/Link';
import { LinkSmall } from '#app/components/links/LinkSmall';
import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation:
    | StackNavigationProp<NavigatorParams, 'SignIn'>
    | StackNavigationProp<NavigatorParams, 'SignUp'>;
  route:
    | RouteProp<NavigatorParams, 'SignIn'>
    | RouteProp<NavigatorParams, 'SignUp'>;
  action: 'signin' | 'signup';
};

export const AuthScreen = ({ navigation, action = 'signin' }: Props) => {
  const [signInState, signIn] = useSignIn();
  const [signOutState, signOut] = useSignOut();
  const [signUpState, signUp] = useSignUp();

  // add next router here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const toast = useToast();

  const goToForgotPassword = () => navigation;

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await signIn({
      email,
      password,
    });
    if (error) {
      if (!toast.isActive('signInError')) {
        toast.show({
          id: 'signInError',
          title: error.message,
        });
      }
    }
    setLoading(false);
  };

  const signUpWithEmail = async () => {
    setLoading(true);
    await signOut();
    if (password !== passwordRepeat) {
      if (!toast.isActive('signUpError')) {
        toast.show({
          id: 'signUpError',
          title: 'Passwords do not match',
        });
      }
    } else {
      const { user, error } = await signUp({
        email: email,
        password: password,
      });
      if (error) {
        if (!toast.isActive('signUpError')) {
          toast.show({
            id: 'signUpError',
            title: error.message,
          });
        }
      }
    }
    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack flex="1" px="6" py="9">
        <VStack space="3">
          <VStack space={{ base: '7', md: '4' }}>
            <TextInput
              isRequired
              autoCapitalize="none"
              keyboardType="email-address"
              label="Email"
              defaultValue={email}
              onChangeText={setEmail}
            />
            <PasswordTextInput
              isRequired
              label="Password"
              defaultValue={password}
              onChangeText={setPassword}
            />
            {action === 'signup' && (
              <PasswordTextInput
                isRequired
                label="Confirm Password"
                defaultValue={passwordRepeat}
                onChangeText={setPasswordRepeat}
              />
            )}
          </VStack>

          {action === 'signin' && (
            <Checkbox
              mt="2"
              alignItems="flex-start"
              isChecked
              value="demo"
              accessibilityLabel="Remember me"
            >
              <Text>Remember me and keep me logged in</Text>
            </Checkbox>
          )}
          {action === 'signin' && (
            <>
              <Button mt="5" onPress={signInWithEmail}>
                {t('auth.signIn.buttonLabel')}
              </Button>
              <LinkSmall
                ml="auto"
                onPress={() => navigation.navigate('SignIn')}
              >
                {t('auth.forgotPassword.label')}
              </LinkSmall>
            </>
          )}
          {action === 'signup' && (
            <>
              <Button mt="5" onPress={signUpWithEmail}>
                {t('auth.signUp.buttonLabel')}
              </Button>
            </>
          )}
        </VStack>
        <HStack
          mb="4"
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{ base: 'auto', md: '8' }}
        >
          {action === 'signin' && (
            <>
              <Text>Don't have an account?</Text>
              <Link
                onPress={() => {
                  navigation.navigate('SignUp');
                }}
              >
                Sign up
              </Link>
            </>
          )}
          {action === 'signup' && (
            <>
              <Text>Already have an account?</Text>
              <Link
                onPress={() => {
                  navigation.navigate('SignIn');
                }}
              >
                Sign in
              </Link>
            </>
          )}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
};
