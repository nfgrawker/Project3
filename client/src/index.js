import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";


import App from "./App";


ReactDOM.render(
  <Provider>
    <App />
  </Provider>,

  document.querySelector("#root")
);
