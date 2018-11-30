import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './components/pages/Landing'
import Profile from './components/pages/Profile.js'
import Checkout from './components/pages/Checkout';
import Header from './components/Header'
import Footer from './components/Footer'
import AdminPage from './components/pages/Admin/Admin';
import Prizes from './components/pages/Prizes'


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path='/admin'  component={AdminPage} />
            </div>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default App;
