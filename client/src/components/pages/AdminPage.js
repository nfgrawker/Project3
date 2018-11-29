import React, { Component } from "react";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import AdminMain from "../AdminMain";

class AdminPage extends Component {
  state = {
    userInfo: []
  };
  render() {
    return (
      <div className="admin-page">
        <AdminSideBar userInfo={this.userInfo}>
          <AdminMain >
              
          </AdminMain>
        </AdminSideBar>
      </div>
    );
  }
}
export default AdminPage;
