import { LOG_IN, SET_NOT_AUTHENTICATED } from "./constants";

export interface LogInState {
  authenticated: boolean;
}

const initialState: LogInState = {
  authenticated: false
};

const logInReducer = (
  state: LogInState = initialState,
  action: any
): LogInState => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, { authenticated: true });
    case SET_NOT_AUTHENTICATED:
      return Object.assign({}, state, { authenticated: false });
    default:
      return state;
  }
};

export default logInReducer;
