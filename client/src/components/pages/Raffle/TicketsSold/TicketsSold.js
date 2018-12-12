import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import rafflePageStyle from "../style/raffleStyle";

class TicketsSold extends Component {
  constructor(props){
    super(props);
    this.state = {
    ticketsSold: 0
  }
  }
  

render() {
  const { classes, ...rest } = this.props;

  return ( 
    <Paper className={classes.root} elevation={1} style={{
      marginTop: 12,
      boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
    }}>
      <Typography variant="h4" component="h4" style={{
        padding: "5px 5px 5px 5px",
        textAlign: "center"
      }}>
        <div {...this.props.children} style={{marginTop: 12}}>
        Total number of tickets current entered into this raffle:
          <br />
          <b style={{fontSize: 50}}>{this.props.ticketsSold}</b>
        </div> 
      </Typography>
    </Paper>
  );
  }
}

export default withStyles(rafflePageStyle)(TicketsSold);