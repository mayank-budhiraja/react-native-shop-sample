import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {home} from '../store/actions';
import {connect} from 'react-redux';
import NativeButton from '../components/NativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import screenNames from '../constants/navigation';
import colors from '../constants/colors';
import styles from './CreateStore-styles';

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
          <Icon name="home-outline" size={60} color={colors.image_color} />
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
        <View style={styles.ButtonContainer}>
          <NativeButton data={'Next'} onClick={() => this.addStore()} />
        </View>
      </View>
    );
  }
}

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
