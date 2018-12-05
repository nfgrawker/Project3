import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";

import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";


import {
  dailySalesChart,

} from "./charts.jsx";






import chartStyle from "./chartStyle.jsx";

class Chart extends React.Component {
  

render() {
    const { classes } = this.props;
    return (
      <div>
<GridContainer>
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
      <h4 className={classes.cardTitle}>Daily Donations</h4>
      <p className={classes.cardCategory}>
        <span className={classes.successText}>
          <ArrowUpward className={classes.upArrowCardCategory} /> 55%
        </span>{" "}
        increase in today donations.
      </p>
    </CardBody>
    <CardFooter chart>
      <div className={classes.stats}>
        <AccessTime /> updated 4 minutes ago
      </div>
    </CardFooter>
  </Card>
</GridItem>
</GridContainer>
</div>
 );
}
}

export default withStyles(chartStyle)(Chart);