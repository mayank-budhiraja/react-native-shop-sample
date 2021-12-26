import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import screenNames from '../constants/navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const HomeStack = ({isAuthenticated}) => {
  return isAuthenticated ? (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HOME} component={Home} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
};

const HomeStackWrapper = connect(mapStateToProps)(HomeStack);

export default HomeStackWrapper;
