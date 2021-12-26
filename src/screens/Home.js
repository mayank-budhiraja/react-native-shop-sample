import React from 'react';
import {View, Text, Button, Alert, StyleSheet, FlatList} from 'react-native';
import colors from '../constants/colors';
import {connect} from 'react-redux';
import {home} from '../store/actions';
import Card from '../components/Card';

const storeData = [
  {
    id: 1,
    title: 'Store A',
    desc: 'Example A ............',
  },
  {
    id: 2,
    title: 'Store B',
    desc: 'Example B.............',
  }
]

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  createStore = () => {
    Alert.alert('create store');
  };

  renderItem = ({item}) => {
    return <Card data={item}/>
  };

  render() {

    return (
      <View>
        <View>
          {storeData ? (
            <FlatList
              style={styles.container}
              data={storeData}
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
            onPress={() => createStore()}>
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
  createStore: home.createStore,
};

const HomeWrapper = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeWrapper;
