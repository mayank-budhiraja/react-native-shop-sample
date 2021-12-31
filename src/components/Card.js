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
          <Text style={styles.descContainer} numberOfLines={2}>
            {data.desc}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%'
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  subContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    color: colors.text_primary,
    fontSize: 24,
  },
  descContainer: {
    width: '36%',
    color: colors.text_secondary,
    fontSize: 16,
  },
});

export default Card;
