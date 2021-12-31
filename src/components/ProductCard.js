import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductCard = ({data, onClick}) => {
  return (
    <View style={styles.shadowContainer}>
      <TouchableOpacity onPress={onClick} style={styles.container}>
        <View style={styles.imageContainer}>
          <Icon name="cart-outline" size={60} color={colors.image_color} />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.headContainer}>
            <Text style={styles.titleContainer}>{data.name}</Text>
            <Text style={[styles.titleContainer, styles.priceContainer]} >
              Rs. {data.price}
            </Text>
          </View>
          <Text style={styles.descContainer} numberOfLines={1} >{data.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    top: 8,
    marginLeft: 40,
    fontSize: 15,
    color: colors.image_color,
  },
  headContainer: {
    flexDirection: 'row',
    
  },
  imageContainer: {
    justifyContent: 'center',
    marginLeft: 10,
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
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 20,
    marginHorizontal: 30,
    paddingVertical: 20,
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
    width: '50%',
    color: colors.text_secondary,
    fontSize: 16,
  },
});

export default ProductCard;
