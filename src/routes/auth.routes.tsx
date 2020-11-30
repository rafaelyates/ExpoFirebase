import React from 'react';
import { useTranslation } from 'react-i18next';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AUTH_ROUTES } from '../constants/routes.constants';
import { AuthForm, CreateAccount } from '../screens/auth';

export default function AuthRoutes() {
  const [t] = useTranslation();
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator tabBarPosition="bottom" initialRouteName={AUTH_ROUTES.SIGN_IN}>
      <Tab.Screen name={AUTH_ROUTES.SIGN_IN} component={AuthForm} options={{ title: t('routes.auth.sign-in') }} />
      <Tab.Screen name={AUTH_ROUTES.SIGN_UP} component={CreateAccount} options={{ title: t('routes.auth.sign-up') }} />
    </Tab.Navigator>
  );
}
