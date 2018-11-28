import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ProfileHeader from './Profile_header';
import Header from './components/Header';
<<<<<<< HEAD
import UserButton from './components/UserButton'
=======
import ButtonBases from './components/UserButton'
>>>>>>> 1b8800fe2e5f46504dd586a0a7544f721d150a5b


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
<<<<<<< HEAD
          <Route exact path="/" component={UserButton} />
=======
          <Route exact path="/" component={ButtonBases} />
>>>>>>> 1b8800fe2e5f46504dd586a0a7544f721d150a5b
          <Route exact path="/profile" component={Dashboard} />
          <Route path="/raffles/new" component={RaffleNew} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
