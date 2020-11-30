import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bindActionCreators } from 'redux';

import { auth } from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SWITCH_ROUTES } from '../constants/routes.constants';
import * as authActions from '../state/ducks/auth/auth.actions';
import AuthRoutes from './auth.routes';
import { RoutesProps } from './routes.models';
import routesSelectors from './routes.selectors';
import UserRoutes from './user.routes';

export default function RoutesContainer(props: RoutesProps) {
  const { theme } = props;
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  const { idToken } = useSelector(routesSelectors);
  const { retrieveCurrentUserToken } = bindActionCreators(authActions, dispatch);

  useEffect(() => {
    auth().onAuthStateChanged(retrieveCurrentUserToken);
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator headerMode="none" initialRouteName={SWITCH_ROUTES.AUTH}>
        {idToken.trim() !== '' ? (
          <Stack.Screen name={SWITCH_ROUTES.USER} component={UserRoutes} />
        ) : (
          <Stack.Screen name={SWITCH_ROUTES.AUTH} component={AuthRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
