import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ProfileHeader from './Profile_header';
import Header from './Header';


const Dashboard = () => <h2>Dashboard</h2>;
const RaffleNew = () => <h2>RaffleNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Dashboard} />
          <Route path="/raffles/new" component={RaffleNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
