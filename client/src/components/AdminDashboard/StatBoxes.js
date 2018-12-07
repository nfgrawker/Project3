import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import CountUp from "react-countup";
import DoneOutline from "@material-ui/icons/DoneOutline";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Store from "@material-ui/icons/Store";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Accessibility from "@material-ui/icons/Accessibility";
import CardHeader from "../pages/AdminPage/Card/CardHeader.jsx";
import CardIcon from "../pages/AdminPage/Card/CardIcon.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  icons: {
    fontSize: "35px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const StatBoxes = props => {
  const { classes } = props;
  const followers = props.userinfo.followers;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
      
              </CardHeader>
            <Grid item xs={6} className="iconBox">
              <DoneOutline className={classes.icons} />
            </Grid>
            <Grid item xs={6} className="counterText">
              <CountUp end={props.totalraffles} />
                Total Raffles
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>

              </CardHeader>
            <Grid item xs={6} className="iconBox ">
              <MonetizationOn className={classes.icons} />
            </Grid>
            <Grid item xs={6} className="counterText">
              <CountUp end={props.moneyraised} />
              In Donations
            </Grid>
          </Paper>
        </Grid>



        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
      
              </CardHeader>
            <Grid item xs={6} className="iconBox">
              <ThumbUp className={classes.icons} />
            </Grid>
            <Grid item xs={6} className="counterText">
              <CountUp end={578} />
              Followers
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(StatBoxes);
