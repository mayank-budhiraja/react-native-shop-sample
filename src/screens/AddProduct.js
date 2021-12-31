import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Alert} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import NativeButton from '../components/NativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import screenNames from '../constants/navigation';

class AddProduct extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.storeData.products.length + 1,
      name: '',
      price: '',
      description: '',
    };
  }

  componentDidMount() {}

  handleTextChange = (text, input) => {
    this.setState({[input]: text});
  };

  saveProduct = (storeID) => {
    const {productID, name, description, price} = this.state;

    if (name !== '' && productID !== '' && price !== '') {
      const payload = {
        product_ID: productID,
        name: name,
        description: description,
        price: price,
      };
      
      this.props.addProductData(storeID, payload);
      this.props.navigation.navigate(screenNames.VIEW_STORE);
    }
  };

  renderComponent = () => {
    return (
      <View>
        <Header navigation={this.props.navigation} />
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
        <View style={styles.buttonContainer}>
          <NativeButton
            data={'Add Product to Store'}
            onClick={() => this.saveProduct(this.props.storeID)}
          />
        </View>
      </View>
    );
  };

  render() {
    return this.renderComponent();
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    top: 40,
    marginHorizontal: 1,
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
    storeID: state.home.storeID,
    productData: state.home.productData,
    storeData: state.home.storeData,
  };
};

const mapDispatchToProps = {
  addProductData: home.addProductData,
  getProductDetails: home.getProductDetails,
};

const AddProductWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProduct);

export default AddProductWrapper;
