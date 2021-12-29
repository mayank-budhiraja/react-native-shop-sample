import actions from '../constants';

const createStore = (data) => {
  return async (dispatch) => {
    dispatch({
      type: actions.CREATE_STORE,
      payload: data,
    });
  };
};

const selectedStore = (data) => {
  return async (dispatch) => {
    dispatch({
      type: actions.SELECTED_STORE,
      payload: data,
    });
  };
};

const selectedProduct = (data) => {
  return async (dispatch) => {
    dispatch({
      type: actions.SELECTED_PRODUCT,
      payload: data,
    });
  };
};

const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    const data = getState().home.storeData.products.filter(
      (item) => item.product_ID != id,
    );
    dispatch({
      type: actions.SELECTED_STORE,
      payload: data,
    });
  };
}

const getProductDetails = (id) => {
  return async (dispatch, getState) => {
    const data = getState().home.storeData.products.filter(
      (item) => item.product_ID == id,
    );
    dispatch({
      type: actions.GET_PRODUCT_DETAILS,
      payload: data[0],
    });
  };
}

const deleteProductDetails = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.GET_PRODUCT_DETAILS,
      payload: null,
    });
  }
}

const getStoreDetails = (id) => {
  return async (dispatch, getState) => {
    const data = await getState().home.feedData.filter((item) => item.id == id);
    await dispatch({
      type: actions.GET_STORE_DETAILS,
      payload: data[0],
    });
  };
};

export default {
  createStore,
  getStoreDetails,
  getProductDetails,
  deleteProductDetails,
  selectedStore,
  selectedProduct,
  
};
