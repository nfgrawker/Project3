import React, { Component } from "react";

require("./Links.css");

class Links extends Component {
  render() {
    return (
      <div>
        <ul id="footerList">
          <li id='footerLinks'>
            <h6 className="text-uppercase font-weight-bold">
              <a id="footer" href="/about">About us</a>
            </h6>
          </li>

          <li id='footerLinks'>
            <h6 className="text-uppercase font-weight-bold">
              <a id="footer" href="/nonprofits">Non Profits</a>
            </h6>
          </li>

          <li id='footerLinks'>
            <h6 className="text-uppercase font-weight-bold">
              <a id="footer" href="/raffles">Raffles</a>
            </h6>
          </li>

          <li id='footerLinks'>
            <h6 className="text-uppercase font-weight-bold">
              <a id="footer" href="/help">Help</a>
            </h6>
          </li>

          <li id='footerLinks'>
            <h6 className="text-uppercase font-weight-bold">
              <a id="footer" href="/contact">Contact</a>
            </h6>
          </li>
        </ul>
        <br />
        <ul id="footerList" className="list-unstyled list-inline text-center">
          <li id='footerLinks' className="list-inline-item">
            <a href="https://www.facebook.com"
              className="btn-floating btn-fb mx-1"
              style={{
                backgroundColor: "#3b5998"
              }}
            >
              <i className="fa fa-facebook"> </i>
              <i className="fa fa-facebook fa-spin-hover"> </i>

            </a>
          </li>
          <li id='footerLinks' className="list-inline-item">
            <a href="https://www.twitter.com"
              className="btn-floating btn-tw mx-1"
              style={{
                backgroundColor: "#00aced"
              }}
            >
              <i className="fa fa-twitter"> </i>
            </a>
          </li>
          <li id='footerLinks' className="list-inline-item">
            <a href="https://plus.google.com/discover"
              className="btn-floating btn-gplus mx-1"
              style={{
                backgroundColor: "#dd4b39"
              }}
            >
              <i className="fa fa-google-plus"> </i>
            </a>
          </li>
          <li id='footerLinks' className="list-inline-item">
            <a href="https://www.linkedin.com"
              className="btn-floating btn-li mx-1"
              style={{
                backgroundColor: "#007bb6"
              }}
            >
              <i className="fa fa-linkedin"> </i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
