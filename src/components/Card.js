import React from 'react';
import {Alert, Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({data, onClick}) => {
  return (
    <View style={styles.shadowContainer}>
      <TouchableOpacity onPress={() => onClick()} style={styles.container}>
        <View style={styles.imageContainer}>
          <Icon
            name="ios-image-outline"
            size={100}
            color={colors.image_color}
          />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.headContainer}>
            <Text style={styles.titleContainer}>{data.title}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.textContainer}ellipsizeMode='tail' numberOfLines={2}>{data.desc}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    elevation: 3,
    borderRadius: 20,
  },
  subContainer: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  titleContainer: {
    color: colors.text_primary,
    fontSize: 24,
  },
  descContainer: {
    top: 20,
    width: 200, 
    height: 80
  },
  textContainer: {
    color: colors.text_secondary,
    fontSize: 16
  }
});

export default Card;
