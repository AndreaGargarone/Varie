import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from "./reducers";
import App from "./App";
import { Provider } from "react-redux";

const myStore = createStore(allReducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  rootElement
);
