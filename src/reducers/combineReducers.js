import updateProductsReducer from "./products";
import updateCartsReducer from "./carts";
import { combineReducers } from "redux";
import wishListReducer from "./wishList";

const allReducers = combineReducers({
  products: updateProductsReducer,
  carts: updateCartsReducer,
  wishList: wishListReducer,
});

export default allReducers;
