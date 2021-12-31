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
            <Text style={[styles.titleContainer, styles.priceContainer]}>
              Rs. {data.price}
            </Text>
          </View>
          <View style={styles.descContainer}>
            <Text ellipsizeMode="tail" numberOfLines={2}>
              {data.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    top: 10,
    marginLeft: 20,
    fontSize: 15,
    color: colors.image_color,
  },
  headContainer: {
    top: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 30,
    paddingVertical: 5,
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
    height: 80,
  },
});

export default ProductCard;
