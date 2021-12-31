import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({navigation}) => {
  return (
    <>
      <View style={styles.subContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} color={colors.image_color} />
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
    marginRight: Platform.OS == 'android' ? 70 : 100,
    marginLeft: 10,
  },
  subContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  titleContainer: {
    color: colors.text_secondary,
    fontSize: 24,
  },
});

export default Header;
