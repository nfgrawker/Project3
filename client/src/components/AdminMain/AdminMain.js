import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({});

class AdminMain extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <p>test</p>
      </div>
    );
  }
}

export default withStyles(styles)(AdminMain);
