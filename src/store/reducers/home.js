import actions from '../constants';

const INITIAL_STATE = {
  feedData: [],
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE_STORE:
      return {...state, feedData: action.payload};
    default:
      return state;
  }
};

export default home;
