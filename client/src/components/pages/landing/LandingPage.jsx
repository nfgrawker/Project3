import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import GridContainer from "./sections/GridContainer.jsx";
import GridItem from "./sections/GridItem.jsx";
import Button from "./sections/Button.jsx";
import HeaderLinks from "./sections/HeaderLinks.jsx";
import Parallax from "./sections/Parallax.jsx";

import landingPageStyle from "./style/landingPage.jsx";

// Sections for this page
import ProductSection from "./sections/ProductSection.jsx";
import TeamSection from "./sections/TeamSection.jsx";
import WorkSection from "./sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
    
        <Parallax filter image={require("../../assets/untitled.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                We provide a platform for philanthropist to fundraise for their favorite causes through 
                the offering of experiences and rewards. Our site works tirelessly to better 
                people’s lives and use our network to reach people who want to make a
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
                  <i className="fas fa-play" />Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
