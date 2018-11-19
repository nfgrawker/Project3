import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo" href="#">
            FunFund
          </a>
          <ul className="right">
            <li>
              <a href="http://localhost:5000/auth/google/" >Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
