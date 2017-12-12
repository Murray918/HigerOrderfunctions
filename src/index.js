import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, browserHistory } from "react-router";

import requireAuth from './components/require_authentication';
import App from "./components/app";
import reducers from "./reducers";
import Resources from './components/resources'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      {/* here is where we nest our component that needs to show based on authentication */}
      <Route path="/" component={App}>
      {/* here is our nested component that we wrap inside of our higher order component */}
        <Route path="resources" component={requireAuth(Resources)}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
