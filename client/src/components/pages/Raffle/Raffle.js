import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import NonProfitInfo from "../../NonProfitInfo"

import rafflePageStyle from "./style/raffleStyle";

import ActiveRaffle from "./ActiveRaffle";
import InactiveRaffle from "./InactiveRaffle";

import axios from 'axios';

class Raffle extends Component {

state = {
  isActive: true,
  endTime: "none",
  prizeDescription: "none",
  prizeImage: "none",
  prizeName: "none",
  nonProfitName: "none",
  nonProfitImage: "none",
  nonProfitDescription: "none"
};

componentDidMount() {
  console.log(this.props.match.params.id)

axios.get('/api/raffle/'+this.props.match.params.id)
  .then(res => {
    console.log(res)
      
      let endTime = res.data.endTime.slice(0, 19);
      this.setState({
        endTime: endTime,
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
  if (this.state.isActive) {
    activeSwitch = <ActiveRaffle endTime={this.state.endTime}/>
  } else {
    activeSwitch = <InactiveRaffle />
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