import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Alert} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import NativeButton from '../components/NativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import screenNames from '../constants/navigation';
import colors from '../constants/colors';

class ViewProduct extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.productData.product_ID,
      name: this.props.productData.name,
      description: this.props.productData.description,
      price: this.props.productData.price,
      inventory: this.props.productData.inventory,
    };
  }

  handleTextChange = (text, input) => {
    this.setState({[input]: text});
  };

  deleteProduct = (storeID, productID) => {
    this.props.deleteProductData(storeID, productID);
    this.props.getStoreDetails(storeID); //to-do useEffect in previous screen
    this.props.navigation.navigate(screenNames.VIEW_STORE);
  };

  editProduct = (storeID) => {
    const {productID, name, description, price} = this.state;

    if (name !== '' && productID !== '' && price !== '') {
      const payload = {
        product_ID: productID,
        name: name,
        description: description,
        price: price,
      };
      this.props.editProductData(storeID, productID, payload);
      this.props.getStoreDetails(storeID);
      this.props.navigation.push(screenNames.VIEW_STORE);
    }
  };

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
            <TextInput
              style={styles.textInputContainer}
              onChangeText={(text) => this.handleTextChange(text, 'name')}
              value={this.state.name}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Description</Text>
            <TextInput
              style={styles.textInputContainer}
              onChangeText={(text) =>
                this.handleTextChange(text, 'description')
              }
              value={this.state.description}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Product ID </Text>
            <TextInput
              style={[
                styles.textInputContainer,
                {color: 'red', borderColor: 'red'},
              ]}
              keyboardType="numeric"
              editable={false}
              onChangeText={(text) => this.handleTextChange(text, 'productID')}
              value={this.state.productID.toString()}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Price </Text>
            <TextInput
              style={styles.textInputContainer}
              keyboardType="numeric"
              onChangeText={(text) => this.handleTextChange(text, 'price')}
              value={this.state.price}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
        <View style={styles.ButtonContainer}>
          <NativeButton
            data={'Delete'}
            onClick={() =>
              this.deleteProduct(this.props.storeID, this.state.productID)
            }
          />
        </View>
        <View style={styles.ButtonContainer}>
          <NativeButton
            data={'Save'}
            onClick={() => this.editProduct(this.props.storeID)}
          />
        </View>
        </View>

        <View style={styles.noteContainer}>
          <Text style={{color: 'red'}}> * non editable fields </Text>
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
  noteContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  ButtonContainer: {
    marginHorizontal: 50,
    marginTop: 100,
    paddingVertical: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.app_icons,
    borderRadius: 50,
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
  };
};

const mapDispatchToProps = {
  deleteProductData: home.deleteProductData,
  getProductDetails: home.getProductDetails,
  getStoreDetails: home.getStoreDetails,
  editProductData: home.editProductData,
};

const ViewProductWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewProduct);

export default ViewProductWrapper;
