import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Countdown from "../../../CountdownTimer/"

import rafflePageStyle from "../style/raffleStyle";

class ActiveRaffle extends Component {

  state = {
    date: "2019-01-01 00:00:00"
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
        Time Reamining on this raffle:
        <br></br>
        <div style={{marginTop: 12}}>
          <Countdown date={this.state.date} />
        </div> 
      </Typography>

      <div style={{display:"flex", justifyContent: "center", marginTop: 10}}>
        <Button variant="contained" color="primary" className={classes.margin} style={{
          height: 80,
          width: 400,
          fontSize: 20,
          marginBottom: 10
        }}>
        Buy Tickets for this Raffle
        </Button>
      </div>
    </Paper>
  );
  }
}

export default withStyles(rafflePageStyle)(ActiveRaffle);