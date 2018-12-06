import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CountUp from "react-countup";
import Chart from "../pages/Profile/sections/Chart";
import CountdownTimer from "../CountdownTimer";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    height: "300px",
    minHeight: "fit-content",
    marginTop: "20px"
  }
});

const CurrentRaffle = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {/* Graph */}
        <Grid item className={classes.paper} xs={12} sm={8}>
          <Chart className="chart" />
        </Grid>

        {/* Current Raffle */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h4>Current Raffle </h4>
            <CountdownTimer date={props.raffleTime} />
            <img className="raffle-img" src={props.image} />
          </Paper>
        </Grid>
      </Grid>

      {/* About Nonprofit --can change */}
      <Grid container spacing={24}>
        <Grid className="dashGrid" item xs={12}>
          <Paper className={classes.paper}>
            <h5>About</h5> <hr />
            <span>{props.about}</span>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CurrentRaffle);
