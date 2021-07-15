import { ActionTypes } from "../contants/action-types";

const data = localStorage.getItem("carts");

export const initialState = {
  products: [],
  wishList: [],
  product: {},
  carts: data
    ? JSON.parse(data)
    : {
        productList: [],
        totalCost: 0,
        totalItem: 0,
      },
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
      const inCart = state.carts.listProduct.find((item) =>
        item._id === payload._id && item.size === payload.size ? true : false
      );

      const newListCart = inCart
        ? state.carts.listProduct.map((item) =>
            item._id === payload._id && item.size === payload.size
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.carts.listProduct, { ...payload, qty: 1 }];
      let cost = 0;
      let count = 0;
      for (let item of newListCart) {
        cost += item.qty * item.price;
        count += item.qty;
      }
      return {
        ...state,
        carts: {
          listProduct: newListCart,
          totalCost: cost,
          totalItem: count,
        },
      };
    }
    case ActionTypes.REMOVE_FROM_CART: {
      let newCart = state.carts.listProduct.filter(
        (prod) => prod._id !== payload._id || prod.size !== payload.size
      );
      let cost = 0;
      let count = 0;
      for (let item of newCart) {
        cost += item.qty * item.price;
        count += item.qty;
      }
      return {
        ...state,
        carts: {
          listProduct: newCart,
          totalCost: cost,
          totalItem: count,
        },
      };
    }
    case ActionTypes.CHANGE_QTY_PRODUCT: {
      //tìm ra thằng cần thay đổi số lượng
      const inCart = state.carts.listProduct.find((item) =>
        item._id === payload.product._id && item.size === payload.product.size
          ? true
          : false
      );

      const newListCart = inCart
        ? state.carts.listProduct.map((item) =>
            item._id === payload.product._id &&
            item.size === payload.product.size
              ? { ...item, qty: payload.qty }
              : item
          )
        : [...state.carts.listProduct];
      let cost = 0;
      let count = 0;
      for (let item of newListCart) {
        cost += item.qty * item.price;
        count += item.qty;
      }
      return {
        ...state,
        carts: {
          listProduct: newListCart,
          totalCost: cost,
          totalItem: count,
        },
      };
    }
    case ActionTypes.SET_CART: {
      return {
        ...state,
        carts: { ...payload },
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
