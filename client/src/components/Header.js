import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../actions/index";
import axios from "axios";
require('./App.css');

class Header extends Component {

    logout = ()=>{
      axios.get("/api/logout").then(response=>{
      }).then(()=>
        {
            this.props.onFetchUser()
        })
    };

    componentDidMount(){
        this.props.onFetchUser()
    }
  renderContent = ()=> {
      switch (this.props.auth) {
          case null:
            return;
          case false:
            return (
              <li>
                <a href="http://localhost:3001/auth/google">Login</a>
              </li>
            );
          default:
            return (
              <li>
                <a onClick={this.logout}>Logout</a>
              </li>
            );
    }
  };

  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.user ? "/profile" : "/"}
            className="left brand-logo"
          >
            Fundtastix
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
  }
const mapDispatchToProps = dispatch=> {
     return {
         onFetchUser: () =>{
             dispatch(fetchUser())
         },
     }
};
function mapStateToProps({auth}) {
    return{auth};
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
