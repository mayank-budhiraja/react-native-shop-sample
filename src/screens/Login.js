import React, {useEffect} from 'react';
import {View, TextInput, StyleSheet, TouchableHighlight, Text} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {user} from '../store/actions';
import NativeButton from '../components/NativeButton';
import credentials from '../utils/credentials.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({setAuth}) => {
  const [userName, onChangeText] = React.useState(null);
  const [password, onChangeNumber] = React.useState(null);

  useEffect(() => {
    isAuth();
  }, []);

  setLogin = async (user, pass) => {
    const data = {user: user, pass: pass};
    if (data.user == credentials.user && data.pass == credentials.pass) {
      await AsyncStorage.setItem('loggedIN', 'true');
      setAuth();
    }
  };

  isAuth = async () => {
    const isCheck = await AsyncStorage.getItem('loggedIN');
    if (isCheck) {
      setAuth();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Icon name="ios-people-outline" size={150} color={colors.image_color} />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Username"
          value={userName}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={password}
          placeholder="Password"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableHighlight onPress={() => setLogin(userName, password)}>
          <Text style={styles.textContainer}>Sign In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  setAuth: user.setAuth,
};

const LoginWrapper = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginWrapper;

const styles = StyleSheet.create({
  textContainer: {
    color: colors.app_secondary,
  },
  ButtonContainer: {
    marginHorizontal: 100,
    marginTop: 50,
    paddingVertical: 20,
    flexDirection: 'row',
    backgroundColor: colors.app_icons,
    borderRadius: 80,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    top: 100,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
