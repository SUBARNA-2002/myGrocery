import React from 'react';
import RouteStack from './src/navigation/RouteStack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux';
import Reactotorn from 'reactotron-react-native';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/utils/toastConfig';
const App = () => {
  if (__DEV__) {
    Reactotorn.configure().useReactNative().connect();
    console.log('App Component Loaded');
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RouteStack />
            <Toast config={toastConfig} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
