import React, { Fragment, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Title } from '../../components';
import { SignUpData } from '../../models/auth.models';
import * as authActions from '../../state/ducks/auth/auth.actions';

export default function SignUpContainer() {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const { register, setValue, handleSubmit } = useForm<SignUpData>();

  const { signUpWithEmailAndPassword } = bindActionCreators(authActions, dispatch);

  useEffect(() => {
    register('username');
    register('password');
    register('repeat');
  }, [register]);

  const onFormSubmit = (form: SignUpData): void => {
    if (form.password && form.password === form.repeat) {
      signUpWithEmailAndPassword(form);
    }
  };

  return (
    <Fragment>
      <Title>{t('containers.sign-up.title')}</Title>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          onChangeText={(text) => setValue('username', text)}
          label={t('containers.sign-up.username')}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={(text) => setValue('password', text)}
          label={t('containers.sign-up.password')}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="oneTimeCode"
        />
        <TextInput
          onChangeText={(text) => setValue('repeat', text)}
          label={t('containers.sign-up.repeat')}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="oneTimeCode"
        />
        <Button onPress={handleSubmit(onFormSubmit)} mode="contained">
          {t('containers.sign-up.submit')}
        </Button>
      </KeyboardAvoidingView>
    </Fragment>
  );
}
