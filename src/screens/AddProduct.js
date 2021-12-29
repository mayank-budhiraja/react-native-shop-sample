import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Alert} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import NativeButton from '../components/NativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

class AddProduct extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  saveProduct = () => {};

  renderComponent = () => {
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <View style={[styles.container, styles.mainContainer]}>
          <View style={styles.container}>
            <Text style={styles.text}> Name</Text>
            <TextInput style={styles.textInputContainer}></TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Description</Text>
            <TextInput style={styles.textInputContainer}></TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Product ID </Text>
            <TextInput style={styles.textInputContainer}></TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}> Price </Text>
            <TextInput style={styles.textInputContainer}></TextInput>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <NativeButton data={'Add Product to Store'} onClick={this.saveProduct} />
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
    productData: state.home.productData,
    productID: state.home.productID,
  };
};

const mapDispatchToProps = {
  deleteProduct: home.deleteProduct,
  getProductDetails: home.getProductDetails,
};

const AddProductWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProduct);

export default AddProductWrapper;
