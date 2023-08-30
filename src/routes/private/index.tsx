import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Private} from '~/screens';
import {PrivateRoutesTypes} from './types';
import TabLayout from '../layouts/TabLayout';
import {DrawerLayout} from '../layouts';

const Stack = createNativeStackNavigator<PrivateRoutesTypes>();

type PrivateRouteProps = {
  initialRouteName?: keyof PrivateRoutesTypes;
};

export default function PrivateRoutes({initialRouteName}: PrivateRouteProps) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabLayout" component={TabLayout} />
      {/* <Stack.Screen name="DrawerLayout" component={DrawerLayout} /> */}
      <Stack.Screen name="Polices" component={Private.Polices} />
      <Stack.Screen name="Meetings" component={Private.Meetings} />
    </Stack.Navigator>
  );
}
