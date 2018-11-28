import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ProfileHeader from './Profile_header';
import Header from './components/Header';
import Home from './components/Pages/Landing'
import Profile from './components/Pages/Profile'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
        
          
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/raffles/new" component={Profile} />
        
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

