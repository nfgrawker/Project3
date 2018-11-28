import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ProfileHeader from './Profile_header';
import Header from './components/Header';
import UserButton from './components/UserButton'


const Dashboard = () => <h2>Dashboard</h2>;
const RaffleNew = () => <h2>RaffleNew</h2>;
// const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
          <Route exact path="/" component={UserButton} />
          <Route exact path="/profile" component={Dashboard} />
          <Route path="/raffles/new" component={RaffleNew} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
