import React from 'react';
import RouteStack from './src/navigation/RouteStack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, { persistor } from './src/redux';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RouteStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;