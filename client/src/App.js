import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './components/pages/Landing'
import Profile from './components/pages/Profile.js'
// import Checkout from './components/pages/Checkout'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminPage from './components/pages/AdminPage'
import PrizePage from './components/pages/Prizes/Prizes'


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Route path="/" component={Header} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/profile" component={Profile} />
                {/* <Route exact path="/checkout" component={Checkout} /> */}
                <Route exact path='/admin'  component={AdminPage} />
<<<<<<< HEAD
                {/* <Route exact path="/prizes" component={Prizes} /> */}
=======
                <Route exact path="/prizes" component={PrizePage} />

>>>>>>> 3cf120697f6f32bf04607b645fe25afbbf104ef8
            </div>
        </BrowserRouter>
        <Footer />
    </div>
  );
};

export default App;
