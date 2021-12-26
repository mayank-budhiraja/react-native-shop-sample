import React from 'react';

import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigation/HomeStack';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <HomeStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
