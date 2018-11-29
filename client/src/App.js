import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/pages/Landing'
import Profile from './components/pages/Profile'
import Checkout from './components/pages/Checkout/index'
import Prizes from './components/pages/Prizes/index'





const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/prizes" component={Prizes} />

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
