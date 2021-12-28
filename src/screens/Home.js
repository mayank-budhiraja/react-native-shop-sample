import React from 'react';
import {View, Text, Button, Alert, StyleSheet, FlatList} from 'react-native';
import colors from '../constants/colors';
import {connect} from 'react-redux';
import {home} from '../store/actions';
import Card from '../components/Card';
import screenNames from '../constants/navigation';
import storeData from '../utils/sample';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.createDataStore(storeData);
  }

  createStore = () => {
    this.props.navigation.navigate(screenNames.CREATE_STORE)
  };

  viewStore = (info) => {
    this.props.selectedStore(info)
    this.props.navigation.navigate(screenNames.VIEW_STORE)
  }

  renderItem = ({item}) => {
    return <Card data={item} onClick={() => this.viewStore(item.id)}/>
  };

  render() {

    return (
      <View>
        <View>
          {this.props.feedData ? (
            <FlatList
              style={styles.container}
              data={this.props.feedData}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => item.id.toString()}
            />
          ) : (
            <Text> No data </Text>
          )}
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            style={styles.Button}
            title="Create Store"
            onPress={() => this.createStore()}>
            Create Store
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  Button: {
    color: colors.app_primary,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    feedData: state.home.feedData,
  };
};

const mapDispatchToProps = {
  createDataStore: home.createStore,
  selectedStore: home.selectedStore
};

const HomeWrapper = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeWrapper;
