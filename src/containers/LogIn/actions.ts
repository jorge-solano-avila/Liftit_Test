import { LOG_IN } from "./constants";
import { Credentials } from "./index";

export const logIn = (credentials: Credentials) => {
  return {
    type: LOG_IN,
    credentials
  }
}