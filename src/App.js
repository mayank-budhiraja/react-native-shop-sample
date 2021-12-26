import React from 'react';

import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './store';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import screenNames from './constants/navigation';
import HomeStack from './navigation/HomeStack';
import SETTINGS from './screens/SETTINGS';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from './constants/colors';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
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

export default App;
