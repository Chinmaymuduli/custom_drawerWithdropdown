import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import PrivateRoutes from '../private';
import CustomDrawer from './CustomDrawer';
import {Platform} from 'react-native';
import {COLORS} from '~/styles';
import {Private} from '~/screens';
import TabLayout from './TabLayout';

const Drawer = createDrawerNavigator();
export default function DrawerLayout() {
  return (
    <>
      <Drawer.Navigator
        // screenOptions={{headerShown: false, drawerStyle: {width: '55%'}}}
        // drawerType="slide"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: Colors.transparent,
          drawerInactiveBackgroundColor: Colors.transparent,
          drawerActiveTintColor: Colors.active,
          drawerInactiveTintColor: Colors.inactive,
          drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
          overlayColor: Colors.transparent,
          drawerStyle: {
            backgroundColor: COLORS.primary,
            width: '60%',
          },
          sceneContainerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
        drawerContent={() => <CustomDrawer />}>
        <Drawer.Screen name="PrivateRoutes" component={PrivateRoutes} />
      </Drawer.Navigator>
    </>
  );
}

const Colors = {
  bg: '#009688',
  active: '#fff',
  inactive: '#eee',
  transparent: 'transparent',
};
