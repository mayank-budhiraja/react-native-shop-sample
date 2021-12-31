import actions from '../constants';

const INITIAL_STATE = {
  isAuthenticated: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return {...state, isAuthenticated: action.payload};
    default:
      return state;
  }
};

export default user;
