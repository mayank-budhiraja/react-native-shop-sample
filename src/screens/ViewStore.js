import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import ProductCard from '../components/ProductCard';
import NativeButton from '../components/NativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import screenNames from '../constants/navigation';

class ViewStore extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStoreDetails(this.props.storeID);
  }

  viewProduct = (info) => {
    this.props.selectedProduct(info);
    this.props.navigation.navigate(screenNames.VIEW_PRODUCT);
  };

  addProduct = () => {}

  renderItem = ({item}) => {
    return (
      <ProductCard
        data={item}
        onClick={() => this.viewProduct(item.product_ID)}
      />
    );
  };

  render() {
    return (
      <View>
        <View>
          <NativeButton data={'Add Product'} onClick={this.addProduct} />
        </View>
        <View style={styles.container}>
          {this.props.storeData.length != 0 ? (
            <FlatList
              style={styles.flatContainer}
              data={this.props.storeData.products}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => item.product_ID.toString()}
            />
          ) : (
            <Text> No product to display </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatContainer: {},
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    storeData: state.home.storeData,
    storeID: state.home.storeID,
  };
};

const mapDispatchToProps = {
  getStoreDetails: home.getStoreDetails,
  selectedProduct: home.selectedProduct,
};

const ViewStoreWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewStore);

export default ViewStoreWrapper;
