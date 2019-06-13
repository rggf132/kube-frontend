import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
import Login from "./Login";

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App} />
      <Route path="/login" exact component={Login} />
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
