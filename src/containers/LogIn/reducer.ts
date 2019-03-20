import { LOG_IN } from "./constants";

export interface LogInState {
  authenticated: boolean
}

const initialState: LogInState = {
  authenticated: false
};

const logInReducer = (state: LogInState = initialState, action: any): LogInState => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, { authenticated: true });
    default:
      return state;
  }
}

export default logInReducer;