import { ActionTypes } from "../contants/action-types";

export const initialState = {
  products: [],
  wishList: [],
  product: {},
  carts: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.TOGGLE_WISHLIST: {
      const product = state.products.find((prod) => prod._id === payload._id);
      product.wishList = !product.wishList;
      state.wishList = state.products.filter((prod) => prod.wishList === true);
      return { ...state };
    }
    case ActionTypes.REMOVE_FROM_WISHLIST: {
      const product = state.products.find((prod) => prod._id === payload._id);
      product.wishList = false;
      return { ...state };
    }
    case ActionTypes.ADD_TO_CART: {
      const inCart = state.carts.find((item) =>
        item._id === payload._id && item.size === payload.size ? true : false
      );
      return {
        ...state,
        carts: inCart
          ? state.carts.map((item) =>
              item._id === payload._id && item.size === payload.size
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.carts, { ...payload, qty: 1 }],
      };
    }
    case ActionTypes.REMOVE_FROM_CART: {
      let newCart = state.carts.filter(
        (prod) => prod._id !== payload._id || prod.size !== payload.size
      );
      return {
        ...state,
        carts: newCart,
      };
    }
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...payload };
    default:
      return state;
  }
};

// export const addToWishListReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.ADD_TO_WISHLIST:
//       payload.wishList = !payload.wishList;
//       const newData = { ...payload, wishLish: !payload.wishList };
//       return { ...state, newData };
//     default:
//       return state;
//   }
// };
