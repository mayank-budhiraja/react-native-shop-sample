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
      storeTitle: '',
      storeDescription: '',
    };
  }

  addStore = () => {
    if (this.state.storeTitle !== '' && this.state.storeDescription !== '') {
      const payload = {
        id: this.props.feedData.length + 1,
        title: this.state.storeTitle,
        desc: this.state.storeDescription,
        products: [],
      };
      this.props.addStoreData(payload);
      this.props.navigation.push(screenNames.HOME);
    }
  };

  handleTextChange = (text, input) => {
    this.setState({[input]: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Icon name="logo-google-playstore" size={60} color="#900" />
        </View>

        <TextInput
          style={styles.textInputContainer}
          placeholder="Enter the name of the store"
          onChangeText={(text) => this.handleTextChange(text, 'storeTitle')}
          value={this.state.storeTitle}
        />
        <TextInput
          style={styles.textInputContainer}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Enter the description for the store"
          onChangeText={(text) =>
            this.handleTextChange(text, 'storeDescription')
          }
          value={this.state.storeDescription}
        />

        <NativeButton data={'Next'} onClick={() => this.addStore()} />
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
  return {
    feedData: state.home.feedData,
  };
};

const mapDispatchToProps = {
  addStoreData: home.addStoreData,
};

const CreateStoreWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateStore);

export default CreateStoreWrapper;
