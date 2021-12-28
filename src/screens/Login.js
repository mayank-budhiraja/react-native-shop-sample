import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {user} from '../store/actions';

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
        <Icon name="home" size={30} color="#900" />
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
        <Button
          style={styles.Button}
          title="Sign In"
          onPress={() => setLogin(userName, password)}
        />
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.app_primary,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
