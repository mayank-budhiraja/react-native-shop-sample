import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import screenNames from '../constants/navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import CreateStore from '../screens/CreateStore';
import ViewStore from '../screens/ViewStore';
import ViewProduct from '../screens/ViewProduct';
import AddProduct from '../screens/AddProduct';

const Stack = createStackNavigator();

const HomeStack = ({isAuthenticated}) => {
  return isAuthenticated ? (
    <Stack.Navigator initialRouteName={screenNames.HOME} screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HOME} component={Home} />
      <Stack.Screen name={screenNames.CREATE_STORE} component={CreateStore} />
      <Stack.Screen name={screenNames.VIEW_STORE} component={ViewStore} />
      <Stack.Screen name={screenNames.VIEW_PRODUCT} component={ViewProduct} />
      <Stack.Screen name={screenNames.ADD_PRODUCT} component={AddProduct} />
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
