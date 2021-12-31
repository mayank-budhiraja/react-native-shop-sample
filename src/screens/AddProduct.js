import React from 'react';
import {
  View,
  Text,
  TextInput,
  BackHandler,
  FlatList,
  Alert,
} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import NativeButton from '../components/NativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import screenNames from '../constants/navigation';

import styles from './AddProducts-styles';

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

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  backAction = () => {
    this.props.navigation.navigate(screenNames.VIEW_STORE);
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

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
    } else {
      Alert.alert('Hold on', 'Fill the fields');
    }
  };

  renderComponent = () => {
    return (
      <View style={{paddingTop: Platform.OS == 'android' ? 40 : 0}}>
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
        <View style={styles.ButtonContainer}>
          <NativeButton
            data={'Add Product to Store'}
            onClick={() => this.saveProduct(this.props.storeID)}
          />
        </View>
        <View style={styles.noteContainer}>
          <Text style={{color: 'red'}}> * non editable fields </Text>
        </View>
      </View>
    );
  };

  render() {
    return this.renderComponent();
  }
}

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
