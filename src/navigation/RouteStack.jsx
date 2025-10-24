// navigation stack
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// redux selector not needed here; Splash will decide where to go

import OnBording from '../screens/OnBording';
import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import Otp from '../screens/Otp';
import Boo from './BottomTab';
import Checkout from '../screens/Checkout';
import PaymentSuccess from '../screens/PaymentSuccess';
import ProductDetails from '../screens/ProductDetails';
import LoginWithGmail from '../screens/LoginWithGmail';
import SignUp from '../screens/SignUp.jsx';
import ProductList from '../screens/ProductList.jsx';
const Stack = createStackNavigator();

// App and Auth stacks are nested under a Root stack which always shows Splash first.
const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeTab" component={Boo} />
    <Stack.Screen name='Checkout' component={Checkout} />
    <Stack.Screen name="Payment-Success" component={PaymentSuccess} />
    <Stack.Screen name="Product-Details" component={ProductDetails} />
    <Stack.Screen name ="ProductList" component={ProductList} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="OnBording" component={OnBording} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignInEmail" component={LoginWithGmail} />
    <Stack.Screen name="Otp" component={Otp} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

const RootStack = createStackNavigator();

const RouteStack = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="Auth" component={AuthStack} />
      <RootStack.Screen name="App" component={AppStack} />
    </RootStack.Navigator>
  );
};

export default RouteStack;
