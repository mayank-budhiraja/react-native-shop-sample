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
};

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
};

const deleteProductDetails = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.GET_PRODUCT_DETAILS,
      payload: null,
    });
  };
};

const deleteProductData = (storeID, productID) => {
  return async (dispatch, getState) => {
    const feedState = getState().home.feedData;

    const data = feedState.map((item) => {
      if (item.id == storeID) {
        return {
          ...item,
          products: item.products.filter((i) => i.product_ID != productID),
        };
      } else {
        return {...item};
      }
    });
    //delete feedState[storeID-1].products[productID-1]

    dispatch(createStore(data))
  };
};

const getStoreDetails = (id) => {
  return async (dispatch, getState) => {
    const data = getState().home.feedData.filter((item) => item.id == id);
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
  deleteProductData,
};
