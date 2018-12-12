import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import NonProfitInfo from "../../NonProfitInfo"

import rafflePageStyle from "./style/raffleStyle";

import ActiveRaffle from "./ActiveRaffle";
import InactiveRaffle from "./InactiveRaffle";
import TicketsSold from "./TicketsSold";
import NoWinner from "./NoWinner";

import { Link } from 'react-router-dom'
import axios from 'axios';

class Raffle extends Component {
constructor(props){
  super(props);
this.state = {
  isActive: true,
  winner: null,
  endTime: "",
  prizeDescription: "",
  prizeImage: "",
  prizeName: "",
  nonProfitName: "",
  nonProfitImage: "",
  nonProfitDescription: "",
  ticketsSold: 0,
  currentTime: moment()
};
}


componentDidMount() {
  console.log(this.props.match.params.id);

axios.get('/api/raffle/' + this.props.match.params.id)
  .then(res => {
    console.log(res);

    if (res.data.winner != undefined || res.data.winner != null) {
      this.setState({
        winner: res.data.winner.user.username,
      })}
    let endTime = moment(res.data.endTime).add(6, 'hours');
      this.setState({
        endTime: endTime,
        ticketsSold: res.data.tickets.length,
        prizeDescription: res.data.prize.description,
        prizeImage:res.data.prize.image,
        prizeName:res.data.prize.name,
        nonProfitName:res.data.nonProfit.name,
        nonProfitImage:res.data.nonProfit.imageLink,
        nonProfitDescription: res.data.nonProfit.description
      })
  })
}

render() {
  const { classes, ...rest } = this.props;

  let activeSwitch;
  if (this.state.currentTime >= this.state.endTime && this.state.winner === null && this.state.ticketsSold > 0) {
    activeSwitch = <InactiveRaffle {...this.props} winner={"Picking Winner Soon"}/>
    console.log(this.state.winner);
  }
  else if (this.state.currentTime >= this.state.endTime && this.state.winner === null && this.state.ticketsSold === 0) {
    activeSwitch = <NoWinner />
  }
  else if (this.state.currentTime >= this.state.endTime) {
    activeSwitch = <InactiveRaffle {...this.props} winner={this.state.winner} />
  }
  else {
    activeSwitch = <ActiveRaffle endTime={this.state.endTime} id={this.props.match.params.id}/>
  }


  return (
    <div className="raffle-page">
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

        <Paper className={classes.root} elevation={1} style={{
          boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
          borderRadius: "0px 0px 4px 4px"
        }}>
            <Grid>
              <GridList className={classes.gridList} cols={1}>
                <GridListTile key={classes.img} style={{
                  height: "400px",
                  width: "100%",
                  objectFit: "contain",
                  boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
                  padding: "0px 2px 0px 2px"
                }}>
                  <img 
                    className="prizeImage"
                    component="img"
                    alt="Prize Image"
                    src={this.state.prizeImage}
                    title={this.state.prizeName}
                    style={{
                      boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
                    }}
                  />
                </GridListTile>
              </GridList>
            </Grid>
            <Typography variant="h3" component="h3" style={{
              padding: "5px 5px 5px 5px",
              textAlign: "center"
            }}>
              {this.state.prizeName}
            </Typography>
            <Typography variant="h5" component="h5"style={{
              padding: "5px 5px 5px 5px",
              textAlign: "center"
            }}>
              {this.state.prizeDescription}
            </Typography>
        </Paper>
        
        <TicketsSold ticketsSold={this.state.ticketsSold} />
        
        {activeSwitch}

        <Paper className={classes.root} elevation={1} style={{
          marginTop: 12,
          boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
        }}>
          <Typography variant="h5" component="h5" style={{
            padding: "5px 5px 5px 5px",
            textAlign: "center"
          }}>
            The proceeds from this raffle will go to:
            <br></br>
            <NonProfitInfo 
              name={this.state.nonProfitName}
              image={this.state.nonProfitImage}
              description={this.state.nonProfitDescription}
            />
          </Typography>
        </Paper>
        </div>
      </div>
    </div>
  );
  }
}

export default withStyles(rafflePageStyle)(Raffle);