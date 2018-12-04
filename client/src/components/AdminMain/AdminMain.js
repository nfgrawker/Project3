import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import './style.css';
import Grid from "@material-ui/core/Grid";


class AdminMain extends Component {
  render() {
    return (
      <div>
       {this.props.children}
      </div>         

    );
  }
}

export default AdminMain;
