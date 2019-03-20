import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Reducers, Action } from "../../reducers";
import App from '../App';
import LogIn from '../LogIn';

interface StoreParameter {
  store: Store<Reducers, Action>
}

const Root = (parameter: StoreParameter) => {
  const { store } = parameter;

  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/log-in" component={LogIn} />
      </Router>
    </Provider>
  );
}

export default Root;
