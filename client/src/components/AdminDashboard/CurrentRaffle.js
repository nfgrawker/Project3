import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CountUp from "react-countup";
import ChartistGraph from "react-chartist";
import CountdownTimer from "../CountdownTimer";
import GridItem from "../pages/AdminPage/Grid/GridItem.jsx";
import Card from "../pages/AdminPage/Card/Card.jsx";
import CardHeader from "../pages/AdminPage/Card/CardHeader.jsx";
import CardBody from "../pages/AdminPage/Card/CardBody.jsx";
import CardFooter from "../pages/AdminPage/Card/CardFooter.jsx";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward"

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../pages/AdminPage/variables/charts.jsx";

import dashboardStyle from "../pages/AdminPage/jss/dashboardStyle.jsx";

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
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Raffles Submitted</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> last raffle ended 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>


        {/* Current Raffle */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <CardHeader color="info">
               <h4>Current Raffle </h4>
              </CardHeader>
            
            <CountdownTimer date={props.raffleTime} />
            <img className="raffle-img" src={props.image} />
          </Paper>
        </Grid>
      </Grid>
      
      {/* About Nonprofit --can change */}
      <Grid container spacing={24}>
        <Grid className="dashGrid" item xs={12}>
          <Paper className={classes.paper}>
          <CardHeader color="rose">
          <h5>About</h5> <hr />
              </CardHeader>
           
            <span>{props.about}</span>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CurrentRaffle);
