import React, { Component } from "react";
import Header from "../Header";
// import Container from "../Container";
import Footer from "../Footer/index";
import ButtonBases from '../ButtonBases'
import RaffleCard from '../Cards/RaffleCard'


class Profile extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
          </div>
          <div className="main">
            <ButtonBases />
            {/* <Container /> */}
            <RaffleCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
