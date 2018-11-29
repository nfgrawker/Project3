import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/pages/Landing'
import Profile from './components/pages/profile'
import Checkout from './components/pages/Checkout/Index'
import Header from './components/Header'
import Footer from './components/Footer'




const App = () => {
  return (
    <div>
        <Header />
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/checkout" component={Checkout} />
        </div>
      </BrowserRouter>
        <Footer />
    </div>
  );
};

export default App;
