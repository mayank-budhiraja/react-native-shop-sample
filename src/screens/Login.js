import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {user} from '../store/actions';
import NativeButton from '../components/NativeButton';

const Login = ({setAuth}) => {
  const [userName, onChangeText] = React.useState(null);
  const [password, onChangeNumber] = React.useState(null);

  setLogin = (user, pass) => {
    const data = {user: user, pass: pass};
    setAuth(data);
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
        <NativeButton data={'Sign In'} onClick={() => this.setLogin(userName, password)} />
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
  Button: {
    color: colors.app_primary,
  },
  ButtonContainer: {
    marginHorizontal: 150,
    marginTop: 50,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.app_icons,
    borderRadius: 50,
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
