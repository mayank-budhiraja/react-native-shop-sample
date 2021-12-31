import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert, BackHandler} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import ProductCard from '../components/ProductCard';
import NativeButton from '../components/NativeButton';
import screenNames from '../constants/navigation';
import Header from '../components/Header';
import colors from '../constants/colors';

class ViewStore extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStoreDetails(this.props.storeID);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  backAction = () => {
    this.props.navigation.navigate(screenNames.HOME)
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

  viewProduct = (info) => {
    this.props.getProductDetails(info);
    this.props.navigation.navigate(screenNames.VIEW_PRODUCT);
  };

  addProduct = () => {
    this.props.navigation.push(screenNames.ADD_PRODUCT);
  };

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
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          {this.props.storeData ? (
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
        <View style={styles.ButtonContainer}>
          <NativeButton iconName={'add-outline'} onClick={this.addProduct} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ButtonContainer: {
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.app_icons,
    position: 'absolute',
    bottom: 40,
    right: 10,
    borderRadius: 50,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 50,
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
    feedData: state.home.feedData,
    storeData: state.home.storeData,
    storeID: state.home.storeID,
  };
};

const mapDispatchToProps = {
  getStoreDetails: home.getStoreDetails,
  selectedProduct: home.selectedProduct,
  getProductDetails: home.getProductDetails,
};

const ViewStoreWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewStore);

export default ViewStoreWrapper;
