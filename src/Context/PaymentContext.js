import React, { useContext, useState } from "react";
import { createContext } from "react";

const PaymentContext = createContext();

export const usePayment = () => {
  return useContext(PaymentContext);
};

const PaymentProvider = ({ children }) => {
  const [paymentInfo, setPaymentInfo] = useState({});

  const savePaymentInfo = (info) => {
    setPaymentInfo(info);
  };

  const value = { paymentInfo, savePaymentInfo };

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};

export default PaymentProvider;
