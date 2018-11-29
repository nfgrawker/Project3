import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './components/pages/Landing'
import Profile from './components/pages/Profile.js'
import Checkout from './components/pages/Checkout/Index'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminPage from './components/pages/AdminPage'


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Route path="/" component={Header} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path='/admin'  component={AdminPage} />
                <Route exact path="/prizes" component={Prizes} />
            </div>
      </BrowserRouter>
        <Footer />
    </div>
  );
};

export default App;
