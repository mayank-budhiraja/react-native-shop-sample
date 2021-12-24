import actions from '../constants';

const INITIAL_STATE = {
  feedData: 'string',
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_FEED_DATA:
      return {...state, feedData: action.payload};
    default:
      return state;
  }
};

export default home;
