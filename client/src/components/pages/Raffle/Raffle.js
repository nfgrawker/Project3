import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import rafflePageStyle from "./style/raffleStyle";
require("./style/raffleStyle.css");

class Raffle extends Component {

render() {
  const { classes, ...rest } = this.props;

  return (
    <div className="raffle-page">
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
      <Grid>
      <GridList className={classes.gridList} cols={1}>
      <GridListTile key={classes.img} id="test">
        <img 
          className="prizeImage"
          component="img"
          alt="Prize Image"
          src="https://cdn8.bigcommerce.com/s-4erg8hlk42/images/stencil/1280x1280/products/51500/52423/Winfield-Vik__04752.1521656868.jpg?c=2"
          title="Vikings Helmet"
        />
        </GridListTile>
        </GridList>
        </Grid>


        <Paper className={classes.root} elevation={1}>
          <Typography variant="h4" component="h4">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
        </div>
      </div>
    </div>
  );
  }
}

export default withStyles(rafflePageStyle)(Raffle);