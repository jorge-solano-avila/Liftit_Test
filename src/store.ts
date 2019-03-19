import { createStore, Store } from "redux";

import { reducers, State, Action } from "./reducers";

const store: Store<State, Action> = createStore(reducers);

export default store;
