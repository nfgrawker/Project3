import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import AdminMain from "../AdminMain";
import MenuList from "../AdminSideBar";

class AdminPage extends Component {
  state = {
    userInfo: [],
    showContent: ""
  };
  handleClick = (event) => {
    console.log(event.target.value);
    console.log("click");
    this.state({
      mainContent: ''
    })
  }

  render() {
    return (
      <div className="admin-page">
        <AdminSideBar 
          userInfo={this.userInfo}
          
          >
          <MenuList 
            onClick={this.handleClick}
          />
          <AdminMain
            content="maincontent"
          >
              
          </AdminMain>
        </AdminSideBar>
      </div>
    );
  }
}
export default AdminPage;
