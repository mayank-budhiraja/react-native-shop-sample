import actions from '../constants';
import storeData from '../../utils/sample';

const INITIAL_STATE = {
  feedData: storeData,
  storeID: 0,
  productID: 0,
  storeData: [],
  productData: null
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE_STORE:
      return {...state, feedData: action.payload};
    case actions.SELECTED_STORE:
      return {...state, storeID: action.payload};
    case actions.GET_STORE_DETAILS:
      return {...state, storeData: action.payload};
    case actions.GET_PRODUCT_DETAILS:
      return {...state, productData: action.payload};
    default:
      return state;
  }
};

export default home;
