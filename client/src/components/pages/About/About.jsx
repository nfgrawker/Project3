import React from "react";
import Button from "../landing/sections/Button/Button.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../landing/sections/Grid/GridContainer";
import GridItem from "../landing/sections/Grid/GridItem.jsx";


import productStyle from "../landing/sections/Product/productStyle.jsx";



class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>About Us</h2>
            <h5 className={classes.description}>
              Wonderfund was born from the belief that non profits have the
              power to mobilize their followers to make a real difference and
              raise awareness and funds for important causes around the world.
              With automatic entry available at the basic $10 donation level,
              and free entries (no donation necessary) always available for
              every sweepstakes, everyone has the chance to win big and make a
              difference. See the sweepstakes official rules for details.
            </h5>
          </GridItem>
        </GridContainer>
       
          
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What services does Wonderfund provide?</h2>
            <h5 className={classes.description}>
            Wonderfund is a service offering non profits and philanthropist a
              technology platform to run sweepstakes. This includes access to
              highly scalable technology, automated payment processing, and
              sweepstakes administration.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Join the Cause</h2>
            <h5 className={classes.description}>
            For more information, influencer and charity inquiries, and press
              inquiries...
            </h5>
            <Button color="primary">Send Message</Button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
