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
            <h2 className={classes.title}>Entering a Prize Draw</h2>
            <h4 className={classes.title}>
              Why do you need to register?
            </h4>
            <h5 className={classes.description}>
              Registering for Wonderfund makes it easier for you to use the site
              in the future. Your details will be securely stored and you will
              not need to re-enter them. In your profile you can track campaigns
              you have entered and edit your account details. By submitting your
              email address, you can elect to receive our monthly digest of
              active sweepstakes. You may also opt out if you do not want to
              receive it.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              Are there age restrictions for entrants?
            </h4>
            <h5 className={classes.description}>
              Yes. Age restrictions will vary between 13+, 16+, 18+, and 21+,
              depending on the nature of the particular campaign. Winners
              younger than the age of majority in his/her place of residence
              must be accompanied by a parent or adult guardian. See the
              official rules for each sweepstakes for details and restrictions.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              How can users pay for voluntary donations?
            </h4>
            <h5 className={classes.description}>
              Major credit and debit cards are accepted. Please note that due to
              high network charges, text entries may be subject to an additional
              fee so that your charity doesn't suffer. Any additional charges
              will be clearly described on the payment page.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              Do I have to pay to enter Wonderfund Campaigns?
            </h4>
            <h5 className={classes.description}>
              No. Wonderfund operates a “no purchase/donation necessary” policy.
              Users can enter campaigns without donating by filling out a free
              entry form available through each sweepstakes' campaign page.
              Donating will not increase your chances of winning. Each properly
              submitted free entry form typically provides 100 entries, which is
              the same amount of entries a user would receive for a $10
              donation, and users can submit more than one free entry form. Full
              details can be found in the campaign-specific terms and
              conditions.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              How do winners know if they have won a prize?
            </h4>
            <h5 className={classes.description}>
              Winners will be notified by email shortly after the campaign entry
              period closes. They must then accept the prize by the deadline
              indicated in the email, and have their eligibility to win
              confirmed, in order to be named the winner.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              How do winners know if they have won a prize?
            </h4>
            <h5 className={classes.description}>
              Winners will be notified by email shortly after the campaign entry
              period closes. They must then accept the prize by the deadline
              indicated in the email, and have their eligibility to win
              confirmed, in order to be named the winner.
            </h5>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              What services does Wonderfund provide?
            </h4>
            <h5 className={classes.description}>
              Wonderfund is a service offering non profits and philanthropist a
              technology platform to run sweepstakes. This includes access to
              highly scalable technology, automated payment processing, and
              sweepstakes administration.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
              Is payment secure on the Wonderfund site?
            </h4>
            <h5 className={classes.description}>
              We provide a highly secure, robust, and reliable third party
              payment processing service. Upon entry to a campaign, entrants’
              payment details are transmitted to Wonderfund's payments partner,
              Paypal. Paypal's systems are Level 1 PCI Compliant ensuring the
              highest level of security and compliance. www.paypal.com.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.title}>
            What is Wonderfunds's refund policy?
            </h4>
            <h5 className={classes.description}>
            All donations made through Wonderfund are final and nonrefundable
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
