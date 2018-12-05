import React, { Component } from "react";
import "./style.css";

class AdminMain extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default AdminMain;
