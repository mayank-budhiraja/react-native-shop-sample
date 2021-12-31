import React from 'react';
import {StyleSheet} from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './navigation/HomeStack';
import {SafeAreaView} from 'react-native';
//import ErrorBoundary from './utils/ErrorBoundary';
import ErrorBoundary from 'react-native-error-boundary'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <SafeAreaView style={styles.container}>
              <ErrorBoundary>
                <HomeStack />
              </ErrorBoundary>
            </SafeAreaView>
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
