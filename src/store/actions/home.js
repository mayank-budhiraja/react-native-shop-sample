import actions from '../constants';

const createStore = (data) => {
  return async (dispatch) => {
    await dispatch({
      type: actions.CREATE_STORE,
      payload: data,
    });
  };
};

const selectedStore = (data) => {
  return async (dispatch) => {
    await dispatch({
      type: actions.SELECTED_STORE,
      payload: data,
    });
  };
};

const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    const data = getState().home.storeData.products.filter(
      (item) => item.product_ID != id,
    );
    await dispatch({
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
    await dispatch({
      type: actions.GET_PRODUCT_DETAILS,
      payload: data[0],
    });
  };
};

const deleteProductDetails = () => {
  return async (dispatch) => {
    await dispatch({
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

    await dispatch(createStore(data));
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

const addStoreData = (payload) => {
  return async (dispatch, getState) => {
    const data = getState().home.feedData;
    data.push(payload); //to-do change implementation
    await dispatch(createStore(data));
  };
};

const addProductData = (storeID, newProductData) => {
  return async (dispatch, getState) => {
    const feedState = getState().home.feedData;
    const data = feedState.map((item) => {
      if (item.id == storeID) {
        const newProducts = item.products;
        newProducts.push(newProductData);
        return {...item, products: newProducts};
      } else {
        return {...item};
      }
    });

    await dispatch(createStore(data));
  };
};

const editProductData = (storeID, productID, payload) => {
  return async (dispatch, getState) => {
    const data = getState().home.feedData;

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == storeID) {
        if (data[i].products[i].product_ID == productID) {
          data[i].products.splice(i, 1);
          data[i].products.push(payload);
          break;
        }
      }
    }
    console.log('findThis',data)
    await dispatch(createStore(data));
  };
};

export default {
  createStore,
  addStoreData,
  getStoreDetails,
  getProductDetails,
  deleteProductDetails,
  selectedStore,
  addProductData,
  deleteProductData,
  editProductData,
};
