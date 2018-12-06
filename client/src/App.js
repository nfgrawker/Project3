import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/landing/LandingPage";
import Profile from "./components/pages/Profile/ProfilePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPage from "./components/pages/Admin/Admin";
import PrizePage from "./components/pages/Prizes/Prizes";
import RafflePage from "./components/pages/Raffle";
import Paypal from "./components/pages/Payment/Paypal";
import NonProfitCard from "./components/Cards/NonProfitCard";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Help from "./components/pages/Help";
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
 

const App = () => {
  return (
    <div> 
      <MuiPickersUtilsProvider utils={MomentUtils}>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/nonprofitcard" component={NonProfitCard} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/checkout" component={Checkout} /> */}
          <Route exact path="/admin/:id" component={AdminPage} />
          <Route exact path="/prizes/:id" component={PrizePage} />
          <Route exact path="/raffle/:id" component={RafflePage} />
          <Route exact path="/paypal:id" component={Paypal} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/help" component={Help} />
        </div>
      </BrowserRouter>
      <Footer />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default App;
