import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({navigation}) => {
  return (
    <>
      <View style={styles.subContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} color={colors.app_buttons} />
          </TouchableOpacity>
        </View>

        <Text style={styles.titleContainer}>Shop App</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginRight: 100,
    marginLeft: 10,
  },
  subContainer: {
    borderColor: 'blue',
    borderWidth: 2,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  titleContainer: {
    color: colors.app_primary,
    fontSize: 24,
  },
});

export default Header;
