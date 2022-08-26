import React, { useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  HStack,
  VStack,
  Text,
  Checkbox,
  Divider,
  IconButton,
  Button,
  Icon,
  Pressable,
  Center,
  Hidden,
  useToast,
  Input,
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSignIn } from 'react-supabase';

// import { Button } from '#app/components/buttons/Button';
import { DividerWithText } from '#app/components/divider/DividerWithText';
import { IconFacebook } from '#app/components/icon/IconFacebook';
import { IconGoogle } from '#app/components/icon/IconGoogle';
import { PasswordTextInput } from '#app/components/input/PasswordTextInput';
import { TextInput } from '#app/components/input/TextInput';
import { Link } from '#app/components/links/Link';
import { LinkSmall } from '#app/components/links/LinkSmall';
import { NavigatorParams } from '#app/core/navigation';

type Props = {
  navigation: StackNavigationProp<NavigatorParams, 'SignIn'>;
};

export const SignIn = ({ navigation }: Props) => {
  const [{ error, fetching, session, user }, signIn] = useSignIn();

  // add next router here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const toast = useToast();

  const goToForgotPassword = () => navigation;

  const signInWithEmail = async () => {
    setLoading(true);
    const { error, session, user } = await signIn({
      email,
      password,
    });
    if (error) {
      if (!toast.isActive('login')) {
        toast.show({
          id: 'login',
          title: error.message,
        });
      }
    }
    setLoading(false);
  };

  const signUpWithEmail = async () => {
    // setLoading(true);
    // await supabase.auth.signOut();
    // const { user, error } = await supabase.auth.signUp({
    //   email: email,
    //   password: password,
    // });
    // console.log(user, error);
    // if (error) Alert.alert(error.message);
    // setLoading(false);
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
          </VStack>
          <Checkbox
            mt="2"
            alignItems="flex-start"
            isChecked
            value="demo"
            colorScheme="primary"
            accessibilityLabel="Remember me"
          >
            <Text
              fontWeight="normal"
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.400' }}
            >
              Remember me and keep me logged in
            </Text>
          </Checkbox>
          <Button mt="5" onPress={signInWithEmail}>
            {t('auth.signIn.buttonLabel')}
          </Button>
          <Button variant="ghost" mt="5" onPress={signInWithEmail}>
            {t('auth.signIn.buttonLabel')}
          </Button>
          <LinkSmall ml="auto" onPress={() => navigation.navigate('SignIn')}>
            Forgot password
          </LinkSmall>
          {/* Closing Link Tag */}
          <DividerWithText text="or" />
          <Center>
            <HStack space="4">
              <Pressable>
                <IconFacebook />
              </Pressable>
              <Pressable>
                <IconGoogle />
              </Pressable>
            </HStack>
          </Center>
        </VStack>
        <HStack
          mb="4"
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{ base: 'auto', md: '8' }}
        >
          <Text
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Don't have an account?
          </Text>
          {/* Opening Link Tag navigateTo:"SignUp" */}
          <Link
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            Sign up
          </Link>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  );
};
