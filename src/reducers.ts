import { combineReducers, Reducer } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";

import logInReducer, { LogInState } from "./containers/LogIn/reducer";
import appReducer, { AppState } from "./containers/App/reducer";

export interface Action {
  type: string;
}

export interface Reducers {
  app: AppState;
  logIn: LogInState;
  form: FormStateMap;
}

export const rootReducer: Reducer<Reducers, Action> = combineReducers({
  app: appReducer,
  logIn: logInReducer,
  form: formReducer
});
