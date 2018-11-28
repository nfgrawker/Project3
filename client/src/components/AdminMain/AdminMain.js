import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import './style.css';
import Grid from "@material-ui/core/Grid";


class AdminMain extends Component {
  render() {
    return (
      <Grid container={true}>
        <div className="adminMain">
          <h1>Admin Page</h1>
          <p>test</p>
        </div>
      </Grid>
    );
  }
}

export default AdminMain;
