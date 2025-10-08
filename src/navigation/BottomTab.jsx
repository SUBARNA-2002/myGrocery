/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Cart from '../screens/Cart';
import Favourite from '../screens/Favourite';
import Account from '../screens/Account';
import { ColorString } from '../theme/AppColor';
import {
  AccountIcon,
  CartIcon,
  ExploreIcon,
  FavouriteIcon,
  ShopIcon,
} from '../../assets/SvgConstants';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          // height: 65,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: ColorString.primary,
        tabBarInactiveTintColor: '#181725',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
      }}
      initialRouteName="Shop"
      backBehavior="initialRoute"
      tabBarOptions={{
        showLabel: false,
      }}
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
        name="Shop"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ExploreIcon width={size} height={size} fill={focused ? ColorString?.primary : color} />
          ),
        }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CartIcon width={size} height={size} fill={focused ? ColorString?.primary : color} />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      {/* <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <FavouriteIcon width={size} height={size} fill={color} />
        ),
      }} name="Favourite" component={Favourite} /> */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <AccountIcon width={size} height={size} fill={focused ? ColorString?.primary : color} />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
