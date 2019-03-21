import { createStore, combineReducers, Store } from "redux";

import { rootReducer, Reducers, Action } from "./reducers";

const store: Store<Reducers, Action> = createStore(rootReducer);

export default store;
