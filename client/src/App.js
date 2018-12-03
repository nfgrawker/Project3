
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/pages/landing/LandingPage'
import Profile from './components/pages/Profile.js'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminPage from './components/pages/Admin/Admin';
import PrizePage from './components/pages/Prizes/Prizes'
import RafflePage from './components/pages/Raffle';
import AppPay from "./components/pages/Payment/AppPay";
<<<<<<< HEAD
import Home from './components/pages/landing/LandingPage.jsx';
=======

>>>>>>> 6d5ae4942b247f5c5f9d894b946e7b15d1d0d81c



const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                {/* <Route exact path="/checkout" component={Checkout} /> */}
                <Route exact path="/admin"  component={AdminPage} />
                <Route exact path="/prizes" component={PrizePage} />
                <Route exact path="/raffle/:id" component={RafflePage} />
                <Route exact path="/Paymentpage" component={AppPay} />

            </div>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default App;
