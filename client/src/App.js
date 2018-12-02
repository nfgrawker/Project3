import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './components/pages/Landing'
import Profile from './components/pages/Profile.js'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminPage from './components/pages/Admin/Admin';
import PrizePage from './components/pages/Prizes/Prizes'
import RafflePage from './components/pages/Raffle'
<<<<<<< HEAD
import { ParallaxProvider } from 'react-scroll-parallax';
=======
import Home from './components/pages/landing/LandingPage.jsx'
>>>>>>> 33137be9c71d96f3396c08eac80cd1ea305230e2



const App = () => {
  return (
    <div>
      <ParallaxProvider>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                {/* <Route exact path="/checkout" component={Checkout} /> */}
                <Route exact path="/admin"  component={AdminPage} />
                <Route exact path="/prizes" component={PrizePage} />
                <Route exact path="/raffle/:id" component={RafflePage} />

            </div>
        </BrowserRouter>
        </ParallaxProvider>
        <Footer />
    </div>
  );
};

export default App;
