import { combineReducers } from "redux";
// import cartsReducer from "./cartsReducer";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  //   cartsState: cartsReducer,
});

export default reducers;
