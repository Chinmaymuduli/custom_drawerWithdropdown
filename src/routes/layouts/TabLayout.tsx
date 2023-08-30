import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDrawerStatus} from '@react-navigation/drawer';
import {NativeBaseProvider, useColorMode} from 'native-base';
import React from 'react';
import {AppIcon, IconProps} from '~/components/core';
import {Pages, Private} from '~/screens';
import {COLORS} from '~/styles';

const Tab = createBottomTabNavigator();
type BottomTabsTypes = {
  route: string;
  label: string;
  icon: IconProps;
  component: React.FC;
};

export default function TabLayout() {
  const drawerStatus = useDrawerStatus();
  const TabArr: BottomTabsTypes[] = [
    {
      route: 'Dashboard',
      label: 'Dashboard',
      icon: {
        AntDesignName: 'home',
      },
      component: Private.Dashboard,
    },
    {
      route: 'Polices',
      label: 'Policy',
      icon: {
        AntDesignName: 'home',
      },
      component: Private.Polices,
    },
  ];
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {fontFamily: 'Montserrat-Bold'},
          tabBarActiveTintColor: COLORS.primary,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            backgroundColor: 'white',
            display: drawerStatus === 'open' ? 'none' : 'flex',
          },
        }}
        sceneContainerStyle={{backgroundColor: COLORS.primary}}>
        {TabArr.map((_, i) => {
          return (
            <Tab.Screen
              key={i}
              name={_.route}
              component={_.component}
              options={{
                tabBarIcon: ({color, size}) => (
                  <AppIcon color={color} size={size} {..._.icon} />
                ),
                tabBarLabel: _.label,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}
