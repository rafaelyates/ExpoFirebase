import React, { Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Title } from '../../components';
import { SignInData } from '../../models/auth.models';
import * as authActions from '../../state/ducks/auth/auth.actions';

export default function SignInContainer() {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const { register, setValue, handleSubmit } = useForm<SignInData>();

  const { signInWithEmailAndPassword } = bindActionCreators(authActions, dispatch);

  useEffect(() => {
    register('username');
    register('password');
  }, [register]);

  return (
    <Fragment>
      <Title>{t('containers.sign-in.title')}</Title>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          onChangeText={(text) => setValue('username', text)}
          label={t('containers.sign-in.username')}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={(text) => setValue('password', text)}
          label={t('containers.sign-in.password')}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button onPress={handleSubmit((data) => signInWithEmailAndPassword(data))} mode="contained">
          {t('containers.sign-in.submit')}
        </Button>
      </KeyboardAvoidingView>
    </Fragment>
  );
}
