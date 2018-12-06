import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Countdown from "../../../CountdownTimer/"

import rafflePageStyle from "../style/raffleStyle";

class InactiveRaffle extends Component {

  state = {
    winner: "none"
  }

render() {
  const { classes, ...rest } = this.props;

  return ( 
    <Paper className={classes.root} elevation={1} style={{
      marginTop: 12,
      boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
    }}>
      <Typography variant="h2" component="h2" style={{
        padding: "5px 5px 5px 5px",
        textAlign: "center"
      }}>
        This raffle has concluded
        <br />
        <div style={{marginTop: 12}}>
          The raffle winner is:
          <br />
          <b>{this.state.winner}</b>
        </div> 
      </Typography>
    </Paper>
  );
  }
}

export default withStyles(rafflePageStyle)(InactiveRaffle);