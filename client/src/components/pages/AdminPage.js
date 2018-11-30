import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import AdminMain from "../AdminMain";
import MenuList from "../AdminSideBar";
import AdminRaffle from "../AdminRaffle/AdminMain";

class AdminPage extends Component {
  state = {
    userInfo: [],
    showContent: "",
    mainContent: "dashboard"
  };
  handleClick = (event) => {
    console.log(event.target.value);
    console.log("click");
    this.state({
      mainContent: ''
    })
  }
  testClick = event => {
    console.log(event.target)
  }

  render() {
    return (
      <div className="admin-page">
        <AdminSideBar 
          userInfo={this.userInfo}
          onClick={this.testClick}          
          >
          <AdminMain
            content={this.mainContent}
          >
          </AdminMain>
        </AdminSideBar>
      </div>
    );
  }
}
export default AdminPage;
