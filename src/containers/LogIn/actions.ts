import { LOG_IN, SET_AUTHENTICATED } from "./constants";
import { Credentials } from "./index";

export const logIn = (credentials: Credentials) => {
  return {
    type: LOG_IN,
    credentials
  }
}

export const setAuthenticated = () => {
  return {
    type: SET_AUTHENTICATED
  }
}