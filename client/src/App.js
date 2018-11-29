import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
<<<<<<< HEAD
import Landing from './components/pages/Landing'
import Profile from './components/pages/Profile'
=======
import Home from './components/pages/Landing'
import Profile from './components/pages/profile'
>>>>>>> f11dec13339cc8940e2c1f1295dd2a6bffdd04de
import Checkout from './components/pages/Checkout/Index'
import AdminPage from './components/pages/AdminPage'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>

          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/admin" component={AdminPage} />

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
