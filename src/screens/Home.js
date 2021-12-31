import React from 'react';
import {
  View,
  Text,
  BackHandler,
  Alert,
  StyleSheet,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';
import colors from '../constants/colors';
import {connect} from 'react-redux';
import {home} from '../store/actions';
import Card from '../components/Card';
import screenNames from '../constants/navigation';
import styles from './Home-styles';
import NativeButton from '../components/NativeButton';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  createStore = () => {
    this.props.navigation.navigate(screenNames.CREATE_STORE);
  };

  viewStore = (info) => {
    this.props.selectedStore(info);
    this.props.getStoreDetails(info);
    this.props.navigation.navigate(screenNames.VIEW_STORE);
  };

  renderItem = ({item}) => {
    return <Card data={item} onClick={() => this.viewStore(item.id)} />;
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1, paddingTop: Platform.OS == 'android' ? 25 : 0}}>
        <StatusBar
          animated={true}
          translucent
          backgroundColor={'#7788FD'}
          barStyle={'dark-content'}
        />
        <View style={styles.topContainer}>
          <Text style={styles.headTextContainer}>React Native Create Shop</Text>
        </View>
        <View style={styles.container}>
          {this.props.feedData && this.props.feedData ? (
            <FlatList
              style={styles.flatLisContainer}
              data={this.props.feedData}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => item.id.toString()}
            />
          ) : (
            <Text> No data </Text>
          )}
        </View>
        <View style={styles.ButtonContainer}>
          <NativeButton iconName={'add-outline'} onClick={this.createStore} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feedData: state.home.feedData,
    storeID: state.home.storeID,
  };
};

const mapDispatchToProps = {
  getStoreDetails: home.getStoreDetails,
  createDataStore: home.createStore,
  selectedStore: home.selectedStore,
};

const HomeWrapper = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeWrapper;
