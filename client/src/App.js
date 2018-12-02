import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './components/pages/Landing'
import Profile from './components/pages/Profile.js'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminPage from './components/pages/Admin/Admin';
import AdminTest from './components/pages/Admin-Test'
import PrizePage from './components/pages/Prizes/Prizes'
import RafflePage from './components/pages/Raffle'



const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Route path="/" component={Header} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile" component={Profile} />
                {/* <Route exact path="/checkout" component={Checkout} /> */}
                <Route exact path="/admin"  component={AdminPage} />
                <Route exact path="/admin-test"  component={AdminTest} />
                <Route exact path="/prizes" component={PrizePage} />
                <Route exact path="/raffle/:id" component={RafflePage} />

            </div>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default App;
