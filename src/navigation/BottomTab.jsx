/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Cart from '../screens/Cart';
// Favourite screen is not used in bottom tabs
import Account from '../screens/Account';
import Favourite from '../screens/Favourite';
import { ColorString } from '../theme/AppColor';
import {
  AccountIcon,
  ExploreIcon,
  FavouriteIcon,
  ShopIcon,
} from '../../assets/SvgConstants';
import { responsive } from '../constants/Responsive';
// responsive not needed in this file
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // hide labels on the tab bar
        // tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: ColorString.tabBarColor,
          paddingTop: responsive.padding(6),
          elevation: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        },
        // add space between icon and label
        tabBarIconStyle: {
          marginBottom: responsive.padding(4),
        },
        tabBarActiveTintColor: ColorString.primary,
        tabBarInactiveTintColor: '#181725',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
      initialRouteName="Home"
      backBehavior="initialRoute"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ShopIcon
              width={size}
              height={size}
              fill={focused ? ColorString?.primary : 'black'}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ExploreIcon
              width={size}
              height={size}
              stroke={focused ? ColorString?.primary : color}
            />
          ),
        }}
        name="Category"
        component={Explore}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FavouriteIcon
              // width={size}
              // height={size}
              stroke={focused ? ColorString?.primary : color}
            />
          ),
        }}
        name="Favorite"
        component={Favourite}
      />
      {/* <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <FavouriteIcon width={size} height={size} fill={color} />
        ),
      }} name="Favourite" component={Favourite} /> */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <AccountIcon
              width={size}
              height={size}
              fill={focused ? ColorString?.primary : color}
            />
          ),
        }}
        name="Profile"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
