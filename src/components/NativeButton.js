import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const NativeButton = ({data, onClick, iconName}) => {

  return (
    <View style={styles.ButtonContainer}>
      <TouchableHighlight onPress={() => onClick()}>
        {data ? (
          <Text style={styles.textContainer}>{data}</Text>
        ) : (
          <Icon name={'add-outline'} size={50} color={colors.app_white} />
        )}
      </TouchableHighlight>
    </View>
  );
};

export default NativeButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: colors.app_icons,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    color: colors.app_secondary,
  },
});
