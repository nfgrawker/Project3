
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
import NonProfitCard from "./components/Cards/NonProfitCard";




const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/nonprofitcard" component={NonProfitCard} />
                <Route exact path="/profile" component={Profile} />
                {/* <Route exact path="/checkout" component={Checkout} /> */}
                <Route exact path="/admin/:id"  component={AdminPage} />
                <Route exact path="/prizes/:id" component={PrizePage} />
                <Route exact path="/raffle/:id" component={RafflePage} />
                <Route exact path="/Paymentpage" component={AppPay} />

            </div>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default App;
