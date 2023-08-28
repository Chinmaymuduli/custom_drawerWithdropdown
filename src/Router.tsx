import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PublicRoutes from './routes/public';
import {useAppContext} from './contexts';

const Router = () => {
  const {isLoggedIn} = useAppContext();
  return <PublicRoutes />;
};

export default Router;

const styles = StyleSheet.create({});
