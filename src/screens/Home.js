import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {home} from '../store/actions';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log('findThis', this.props.feedData)
    return (
      <View>
          <Text> working</Text>
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
  getFeedData: home.getFeedData,
};

const HomeWrapper = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeWrapper;
