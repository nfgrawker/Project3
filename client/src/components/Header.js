import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
require('./App.css');

class Header extends Component {
    state={
        auth:null
    };

    getUser = ()=>{
        axios.get("/api/currentuser").then(response=>{
            if(response.data){
                this.setState({auth:true})
            }
            else if (!response.data){
                this.setState({auth:false})
            }
        })
    };
    componentDidMount(){
        this.getUser()
    }
  renderContent = ()=> {
      switch (this.state.auth) {
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
                <a href="/api/logout">Logout</a>
              </li>
            );
    }
  }

  render() {
    console.log(this.props);
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

function mapStateToProps({auth}) {
    return{auth};
}

export default connect(mapStateToProps)(Header);
