import React from 'react';
import { useTranslation } from 'react-i18next';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { USER_ROUTES } from '../constants/routes.constants';
import { UserMenu } from '../containers';
import { Home } from '../screens/user';

export default function UserRoutes() {
  const [t] = useTranslation();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName={USER_ROUTES.HOME} drawerContent={(props) => <UserMenu {...props} />}>
      <Drawer.Screen name={USER_ROUTES.HOME} component={Home} options={{ title: t('routes.user.home') }} />
    </Drawer.Navigator>
  );
}
