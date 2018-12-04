import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Countdown from "../../CountdownTimer"
import NonProfitCard from "../../Cards/NonProfitCard"

import rafflePageStyle from "./style/raffleStyle";

class Raffle extends Component {

render() {
  const { classes, ...rest } = this.props;

  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

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
                  boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
                  padding: "0px 2px 0px 2px"
                }}>
                  <img 
                    className="prizeImage"
                    component="img"
                    alt="Prize Image"
                    src="https://cdn8.bigcommerce.com/s-4erg8hlk42/images/stencil/1280x1280/products/51500/52423/Winfield-Vik__04752.1521656868.jpg?c=2"
                    title="Vikings Helmet"
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
              Prize name header
            </Typography>
            <Typography component="p"style={{
              padding: "5px 5px 5px 5px",
              textAlign: "center"
            }}>
              Import prize description here.
            </Typography>
        </Paper>
        
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
              <Countdown date={`${year}-12-25T00:00:00`} />
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
            *Non-profit card here*
          </Typography>
        </Paper>
        </div>
      </div>
    </div>
  );
  }
}

export default withStyles(rafflePageStyle)(Raffle);