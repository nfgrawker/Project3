import React, { Component } from "react";
import superagent from "superagent";
import { userInfo } from "os";

class ProfileHeader extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return (
        //   <li>
        //     <a href="/api/logout">Logout</a>
        //   </li>
             <li>
                 <img src={user.thumnail}/>
            </li>
        );
    }
  }
}

export default ProfileHeader;
