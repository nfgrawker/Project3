import React from "react";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Chart from './sections/Chart';
import ButtonBases from "./sections/ButtonBases";
import GridContainer from "./sections/Grid/GridContainer.jsx";
import GridItem from "./sections/Grid/GridItem.jsx";
import Parallax from "./sections/Parallax/Parallax.jsx";
import RaffleCard from "../../Cards/RaffleCard";

import profilePageStyle from "./profilePagestyle.jsx";

class ProfilePage extends React.Component {
  profile;
  state = {
    auth: null,
    anchorEl: null,
    mobileMoreAnchorEl: null
  };
  getUser = () => {
    axios.get("/api/currentuser").then(response => {
      if (response.data) {
        this.setState({
          thumbnail: response.data.thumbnail,
          auth: true,
          googleid: response.data.googleId,
          username: response.data.username
        });
      } else if (!response.data) {
        this.setState({ auth: false });
      }
    });
  };
  componentDidMount() {
    this.getUser();
  }

  renderImage = () => {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    switch (this.state.auth) {
      default:
        return <img src={this.state.thumbnail} className={imageClasses} />;
    }
  };

  renderName = () => {
    switch (this.state.auth) {
      default:
        return <h2>{this.state.username}</h2>;
    }
  };

  render() {
    const { classes } = this.props;
    classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

    return (
      <div>
        <Parallax
          small
          filter
          image={require("../../assets/profilebanner.png")}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    {this.renderImage()}

                    <div className={classes.name}>{this.renderName()}</div>
                  </div>
                  <ButtonBases />
                </GridItem>
                
              </GridContainer>
              <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
              <Chart />
              </GridItem>
              </GridContainer>
              <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
              <RaffleCard />
              <RaffleCard />
              </GridItem>
              </GridContainer>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
