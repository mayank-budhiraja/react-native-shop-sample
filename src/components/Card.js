import React from 'react';
import {Alert, Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({data, onClick}) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Icon name="home" size={60} color="#900" />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleContainer}>{data.title}</Text>
        <Text style={styles.descContainer}>{data.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 10,
  },
  subContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'center',
  },
  titleContainer: {
    color: colors.app_primary,
    fontSize: 24,
  },
  descContainer: {
    color: colors.app_primary,
    fontSize: 18,
  },
});

export default Card;
