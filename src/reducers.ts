import { combineReducers, Reducer } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";

import logInReducer, { LogInState } from "./containers/LogIn/reducer";

export interface Action {
  type: string;
}

export interface Reducers {
  logIn: LogInState,
  form: FormStateMap;
}

export const rootReducer: Reducer<Reducers, Action> = combineReducers({
  logIn: logInReducer,
  form: formReducer
});
