import { LoginActionTypes } from "../contants/action-types";
const initialState = {
  currentUser: null,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LoginActionTypes.LOGIN: {
      return { ...state, currentUser: payload ? { ...payload } : payload };
    }
    default:
      return state;
  }
};
