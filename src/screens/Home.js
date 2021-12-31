import React from 'react';
import {
  View,
  Text,
  BackHandler,
  Alert,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import colors from '../constants/colors';
import {connect} from 'react-redux';
import {home} from '../store/actions';
import Card from '../components/Card';
import screenNames from '../constants/navigation';

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
      <View style={{backgroundColor: 'white', flex: 1}}>
        <StatusBar
          animated={true}
          translucent
          backgroundColor={colors.app_primary}
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

const styles = StyleSheet.create({
  headTextContainer: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  flatLisContainer: {
    marginTop: 40,
  },
  topContainer: {
    paddingVertical: 100,
    paddingHorizontal: 30,
    backgroundColor: '#7788FD',
    alignItems: 'center'
  },
  container: {
    top: -50,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  Button: {
    color: colors.app_primary,
  },
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
});

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
