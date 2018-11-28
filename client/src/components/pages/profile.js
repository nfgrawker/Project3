import React, { Component } from "react";
import Header from "../Header";
// import Container from "../Container";
// import Footer from "../Footer";
import ButtonBases from '../ButtonBases'


class Profile extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header />
          </div>
          <div className="main">
            <ButtonBases />
            {/* <Container /> */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Profile;
