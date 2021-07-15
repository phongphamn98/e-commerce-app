import { combineReducers } from "redux";
// import cartsReducer from "./cartsReducer";
import { productReducer, selectedProductReducer } from "./productReducer";
import { loginReducer } from "./loginReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  login: loginReducer,
  //   cartsState: cartsReducer,
});

export default reducers;
