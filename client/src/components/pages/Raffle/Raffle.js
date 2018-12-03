import React, { Component } from "react";
import CardMedia from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import NonProfitInfo from "../../NonProfitInfo";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import rafflePageStyle from "./style/raffleStyle"

class Raffle extends Component {

render() {
  const { classes, ...rest } = this.props;
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>
        <h3>Signed Minnesota Vikings Helmet</h3>
        <img
          alt="Prize Image"
          height="500"
          src="https://cdn8.bigcommerce.com/s-4erg8hlk42/images/stencil/1280x1280/products/51500/52423/Winfield-Vik__04752.1521656868.jpg?c=2"
          title="Vikings Helmet"
        />
      </div>
    </div>
  );
  }
}

export default withStyles(rafflePageStyle)(Raffle);