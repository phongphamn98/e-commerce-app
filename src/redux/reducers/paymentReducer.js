import { paymentActionTypes } from "../contants/action-types";

export const paymentReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case paymentActionTypes.SET_PAYMENT_INFO:
      return { ...payload };
    default:
      return state;
  }
};
