import React, { Component } from "react";

require("./NavLinks.css");

class NavLinks extends Component {
  render() {
    return (
      <div>
        <ul id="headerList">
          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="/about">
                About us
              </a>
            </h6>
          </li>

          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="#!">
                Products
              </a>
            </h6>
          </li>

          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="#!">
                Awards
              </a>
            </h6>
          </li>

          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="/help">
                Help
              </a>
            </h6>
          </li>

          <li id="headerLinks">
            <h6 className="text-uppercase font-weight-bold">
              <a id="navlink" href="/contact">
                Contact
              </a>
            </h6>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavLinks;
