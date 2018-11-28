import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import reduxThunk from 'redux-thunk';
import App from "./App";


ReactDOM.render(
  <Provider >
    <App />
  </Provider>,

  document.querySelector("#root")
);
