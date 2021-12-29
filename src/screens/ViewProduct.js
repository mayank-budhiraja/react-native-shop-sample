import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Alert} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import NativeButton from '../components/NativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import screenNames from '../constants/navigation';

class ViewProduct extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProductDetails(this.props.productID);
  }

  deleteProduct = (storeID, productID) => {
    this.props.deleteProductData(storeID, productID)
    this.props.getStoreDetails(storeID) //to-do useEffect in previous screen
    this.props.navigation.navigate(screenNames.VIEW_STORE)
  };

  saveProduct = () => {}

  renderComponent = () => {
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <View style={styles.header}>
          <Text>Product Screen</Text>
        </View>
        <View style={[styles.container, styles.mainContainer]}>
          <View style={styles.container}>
            <Text style={styles.text}> Name</Text>
            <TextInput style={styles.textInputContainer}>
              {this.props.productData.name}
            </TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Description</Text>
            <TextInput style={styles.textInputContainer}>
              {this.props.productData.description}
            </TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Product ID </Text>
            <TextInput style={styles.textInputContainer}>
              {this.props.productData.product_ID}
            </TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Price </Text>
            <TextInput style={styles.textInputContainer}>
              {this.props.productData.price}
            </TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <NativeButton data={'Delete'} onClick={() => this.deleteProduct(this.props.storeID,this.props.productID)} />
          <NativeButton data={'Save'} onClick={this.saveProduct} />
        </View>
      </View>
    );
  };

  render() {
    return this.props.productData ? (
      this.renderComponent()
    ) : (
      <Text>No data</Text>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    top: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainContainer: {
    margin: 10,
    top: 40,
  },
  header: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    height: 20,
    marginHorizontal: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    productData: state.home.productData,
    storeID: state.home.storeID,
    productID: state.home.productID,
  };
};

const mapDispatchToProps = {
  deleteProductData: home.deleteProductData,
  getProductDetails: home.getProductDetails,
  getStoreDetails: home.getStoreDetails
};

const ViewProductWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewProduct);

export default ViewProductWrapper;
