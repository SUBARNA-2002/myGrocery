import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import OnBording from '../screens/OnBording';
import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import Otp from '../screens/Otp';
import Boo from './BottomTab';
import Checkout from '../screens/Checkout';
import PaymentSuccess from '../screens/PaymentSuccess';
import ProductDetails from '../screens/ProductDetails';
const RouteStack = () => {
  const Stack = createStackNavigator();
  return ( 
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeTab" component={Boo} />
      <Stack.Screen name="OnBording" component={OnBording} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name='Checkout' component={Checkout} />
      <Stack.Screen name="Payment-Success" component={PaymentSuccess} />
      <Stack.Screen name="Product-Details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default RouteStack;

const styles = StyleSheet.create({});
