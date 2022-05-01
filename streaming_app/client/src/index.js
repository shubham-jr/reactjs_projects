import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import * as ReactDomClient from "react-dom/client";
const root = ReactDomClient.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
