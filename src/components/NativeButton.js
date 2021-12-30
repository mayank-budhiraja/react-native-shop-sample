import React from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity, TouchableHighlight} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const NativeButton = ({data, onClick}) => {
  return (
    <View style={styles.ButtonContainer}>
      <TouchableHighlight onPress={() => onClick()}>
        <Text style={styles.textContainer}>{data}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default NativeButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    padding: 10,
    marginHorizontal: 120,
    backgroundColor: colors.app_primary,
    borderColor: colors.app_primary,
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textContainer: {
    color: colors.app_secondary
  }
});
