import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PublicRoutes from './routes/public';
import {useAppContext} from './contexts';
import {DrawerLayout, TabLayout} from './routes/layouts';
import PrivateRoutes from './routes/private';

const Router = () => {
  const {isLoggedIn} = useAppContext();
  console.log({isLoggedIn});
  return isLoggedIn ? <DrawerLayout /> : <PublicRoutes />;
};

export default Router;
