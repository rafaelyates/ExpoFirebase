import React from 'react';
import { useTranslation } from 'react-i18next';
import { Drawer } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';

import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { Title } from '../../components';
import { USER_ROUTES } from '../../constants/routes.constants';
import * as authActions from '../../state/ducks/auth/auth.actions';

export default function UserMenuContainer(props: DrawerContentComponentProps) {
  const {
    state: { index, routes },
  } = props;
  const { name: currentRoute } = routes[index];
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const { signOutAndRemoveTokens } = bindActionCreators(authActions, dispatch);

  return (
    <DrawerContentScrollView {...props}>
      <Title>{t('containers.user-menu.title')}</Title>
      <Drawer.Section>
        <Drawer.Item label={t('containers.user-menu.routes.home')} active={currentRoute === USER_ROUTES.HOME} />
      </Drawer.Section>
      <Drawer.Section>
        <Drawer.Item label={t('containers.user-menu.actions.sign-out')} onPress={() => signOutAndRemoveTokens()} />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}
