import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const NativeButton = ({data, onClick}) => {
  return (
    <View style={styles.ButtonContainer}>
      <Button
        style={styles.Button}
        title={data}
        onPress={() => onClick()}></Button>
    </View>
  );
};

export default NativeButton;

const styles = StyleSheet.create({
  Button: {
    color: colors.app_primary,
    height: 100
  },
  ButtonContainer: {
    
    justifyContent: 'space-evenly',
    margin: 10,
  },
});
