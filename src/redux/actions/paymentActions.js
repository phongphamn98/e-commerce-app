import { paymentActionTypes } from "../contants/action-types";

export const setPaymentInfo = (paymentInfo) => ({
  type: paymentActionTypes.SET_PAYMENT_INFO,
  payload: paymentInfo,
});
