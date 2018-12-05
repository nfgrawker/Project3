import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "./sections/Grid/GridContainer.jsx";
import GridItem from "./sections/Grid/GridItem.jsx";
import Button from "./sections/Button/Button.jsx";
import Parallax from "./sections/Parallax/Parallax.jsx";
import ParallaxTwo from "./sections/Parallax/ParallaxTwo.jsx";

import landingPageStyle from "./style/landingPage.jsx";

// Sections for this page
import ProductSection from "./sections/Product/ProductSection.jsx";
import RaffleSection from "./sections/Raffles/RaffleSection.jsx";
import ContactSection from "./sections/Contact/ContactSection.jsx";

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax filter image={require("../../assets/untitled.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  We provide a platform for philanthropist to fundraise for
                  their favorite causes through the offering of experiences and
                  rewards. Our site works tirelessly to better people’s lives
                  and use our network to reach people who want to make a
                  difference, and have fun doing it.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play-circle" />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
          </div>
        </div>
        <ParallaxTwo
          filter
          image={require("../../assets/winningticket.gif")}
          alt-text="non profit photo"
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} />
            </GridContainer>
          </div>
        </ParallaxTwo>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <RaffleSection />
            <hr />
            <ContactSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Home);
