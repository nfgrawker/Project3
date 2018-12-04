import React, { Component } from "react";
import ButtonBases from "../ButtonBases";
import RaffleCard from "../Cards/RaffleCard";
import CheckoutButton from '../Buttons/CheckoutButton'




class Profile extends Component {
  render() {
    return (
      <div >
        <ButtonBases />
        {/* <Container /> */}
        <RaffleCard />
        <CheckoutButton />
      </div>
    );
  }
}

export default Profile;
