import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const toggleWishList = (product) => {
  return {
    type: ActionTypes.TOGGLE_WISHLIST,
    payload: product,
  };
};

export const removeFromWishList = (product) => {
  return {
    type: ActionTypes.REMOVE_FROM_WISHLIST,
    payload: product,
  };
};

export const addToCart = (product) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: product,
});
