import actions from '../constants';

const createStore = (data) => {
  return async (dispatch) => {
    dispatch({
      type: actions.CREATE_STORE,
      payload: data,
    });
  };
};

export default {
  createStore,
};
