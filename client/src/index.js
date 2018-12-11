import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });



ReactDOM.render(<App />,document.querySelector("#root"));
