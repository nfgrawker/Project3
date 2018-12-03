import React, { Component } from "react";
import Header from "../Header";
// import Container from "../Container";
import Footer from "../Footer/index";
import ButtonBases from "../ButtonBases";
import RaffleCard from "../Cards/RaffleCard";




class Profile extends Component {
  render() {
    return (
      <div >
        <ButtonBases />
        {/* <Container /> */}
        <RaffleCard />
      </div>
    );
  }
}

export default Profile;
