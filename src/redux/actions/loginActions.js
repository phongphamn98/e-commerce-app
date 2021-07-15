import { LoginActionTypes } from "../contants/action-types";

export const addUser = (user) => {
  return {
    type: LoginActionTypes.ADD_USER,
    payload: user,
  };
};

export const setUser = (user) => {
  return {
    type: LoginActionTypes.SET_USER,
    payload: user,
  };
};

export const userLogin = ({ currentUser }) => {
  return {
    type: LoginActionTypes.LOGIN,
    payload: currentUser,
  };
};
