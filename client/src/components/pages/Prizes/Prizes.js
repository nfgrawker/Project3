import React, { Component } from "react";
import Header from "../../Header";
// import Container from "../Container";
import Footer from "../../Footer/index";
import PrizeCard from '../../Cards/PrizeCard'


class Prizes extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header />
          </div>
          <div className="main">
            <PrizeCard />
            {/* <Container /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Prizes;
