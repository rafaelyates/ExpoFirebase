import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Appbar } from 'react-native-paper';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Center, Container, Title } from '../../components';

export default function HomeScreen() {
  const [t] = useTranslation();
  const navigation = useNavigation();

  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.Content title={t('screens.home.title')} />
        <Appbar.Action icon="dots-vertical" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      </Appbar.Header>
      <Container>
        <Center>
          <Title>{t('screens.home.message')}</Title>
        </Center>
      </Container>
    </Fragment>
  );
}
