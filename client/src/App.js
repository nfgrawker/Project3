import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ProfileHeader from './Profile_header';
import Header from './components/Header';
import Home from './components/pages/Landing'
import Profile from './components/pages/profile'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/raffles/new" component={Profile} />
          <Route path="/admin" component={AdminPage} />

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
