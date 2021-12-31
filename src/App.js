import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigation/HomeStack';
import {SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import ErrorBoundary from './utils/ErrorBoundary';
import ErrorBoundary from 'react-native-error-boundary'

const SafeAreaContext = Platform.OS == 'android' ? SafeAreaProvider : SafeAreaView

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <SafeAreaContext style={styles.container}>
              <ErrorBoundary>
                <HomeStack />
              </ErrorBoundary>
            </SafeAreaContext>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
