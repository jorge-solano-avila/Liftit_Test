import { LOG_IN, SET_NOT_AUTHENTICATED } from "./constants";
import { Credentials } from "./index";

export const logIn = (credentials: Credentials) => {
  return {
    type: LOG_IN,
    credentials
  }
}

export const setNotAuthenticated = () => {
  return {
    type: SET_NOT_AUTHENTICATED
  }
}