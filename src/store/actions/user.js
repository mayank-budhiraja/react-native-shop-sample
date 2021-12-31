import actions from '../constants';

const setAuth = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.LOG_IN,
      payload: true,
    });
  };
};

export default {
  setAuth,
};
