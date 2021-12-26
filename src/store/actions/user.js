import actions from '../constants';
import credentials from '../../utils/credentials.json'

const setAuth = (data) => {
  return async (dispatch) => {
      if(data.user == credentials.user && data.pass == credentials.pass){
        dispatch({
            type: actions.LOG_IN,
            payload: true
          });
      }
  };
};

export default {
  setAuth
};
