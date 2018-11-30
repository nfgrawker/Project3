import React, { Component } from "react";
import Header from "../Header";
// import Container from "../Container";
import Footer from "../Footer/index";
import ButtonBases from "../ButtonBases";
import RaffleCard from "../Cards/RaffleCard";
import homeBg from "../../homeBg.svg";

var sectionStyle = {
  height: "2800px",
  width: "100%",
  backgroundSize: "100%",
  backgroundImage: `url(${homeBg})`
};

class Profile extends Component {
  render() {
    return (
      <div style={sectionStyle}>
        <ButtonBases />
        {/* <Container /> */}
        <RaffleCard />
      </div>
    );
  }
}

export default Profile;
