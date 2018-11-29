import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import './style.css';
import Grid from "@material-ui/core/Grid";
import StatBoxes from '../AdminCharts/StatBoxes';


class AdminMain extends Component {
  render() {
    return (
      <Grid id="adminMain" container={true}>
        <div className="adminMain" main={this.main}>
          <h1>Admin Page</h1>
        </div>
        <StatBoxes />
      </Grid>

          

    );
  }
}

export default AdminMain;
