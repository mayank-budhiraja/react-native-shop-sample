import React from 'react';
import {StyleSheet} from 'react-native';

import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import screenNames from './src/constants/navigation';
import Home from './src/screens/Home';
import SETTINGS from './src/screens/SETTINGS';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from './src/constants/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name={screenNames.HOMESTACK}
                component={HomeStack}
                options={{
                  tabBarLabel: 'Home',
                  tabBarOptions: {
                    activeTintColor: colors.app_Tint,
                  },
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Icon
                        name="home"
                        size={24}
                        color={
                          tabInfo.focused
                            ? colors.app_color_primary
                            : colors.app_color_secondary
                        }
                      />
                    );
                  },
                }}
              />
              <Tab.Screen
                name={screenNames.SETTINGS}
                component={SETTINGS}
                options={{
                  tabBarLabel: 'Settings',
                  tabBarOptions: {
                    activeTintColor: colors.app_Tint,
                  },
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Icon
                        name="remove-circle-outline"
                        size={24}
                        color={
                          tabInfo.focused
                            ? colors.app_color_primary
                            : colors.app_color_secondary
                        }
                      />
                    );
                  },
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HOME} component={Home} />
    </Stack.Navigator>
  );
}

export default App;

const styles = StyleSheet.create({});
