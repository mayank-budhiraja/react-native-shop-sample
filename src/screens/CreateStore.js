import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import NativeButton from '../components/NativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import screenNames from '../constants/navigation';

class CreateStore extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      storeTitle: null,
      storeDescription: null,
    };
  }

  viewStore = () => {
    this.props.navigation.navigate(screenNames.VIEW_STORE)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Icon name="logo-google-playstore" size={60} color="#900" />
        </View>

        <TextInput
          style={styles.textInputContainer}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Enter the name of the store"
          value={this.state.storeTitle}
        />
        <TextInput
          style={styles.textInputContainer}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Enter the description for the store"
          value={this.state.storeDescription}
        />

        <NativeButton data={'Next'} onClick={this.viewStore}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  return {};
};

const mapDispatchToProps = {
  createStore: home.createStore,
};

const CreateStoreWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateStore);

export default CreateStoreWrapper;
