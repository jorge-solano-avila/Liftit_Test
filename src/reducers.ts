import { combineReducers, Reducer } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";

export interface Action {
  type: string;
}

export interface Reducers {
  form: FormStateMap;
}

export const rootReducer: Reducer<Reducers, Action> = combineReducers({
  form: formReducer
});
