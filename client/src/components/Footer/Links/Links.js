import React, { Component } from "react";
import Button from "@material-ui/core/Button";

require("./Links.css");

class Links extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!">About us</a>
            </h6>
          </li>

          <li>
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!">Products</a>
            </h6>
          </li>

          <li>
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!">Awards</a>
            </h6>
          </li>

          <li>
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!">Help</a>
            </h6>
          </li>

          <li>
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!">Contact</a>
            </h6>
          </li>
        </ul>
        <br />
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-fb mx-1"
              style={{
                backgroundColor: "#3b5998"
              }}
            >
              <i className="fa fa-facebook"> </i>
              <i className="fa fa-facebook fa-spin-hover"> </i>

            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-tw mx-1"
              style={{
                backgroundColor: "#00aced"
              }}
            >
              <i className="fa fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-gplus mx-1"
              style={{
                backgroundColor: "#dd4b39"
              }}
            >
              <i className="fa fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
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
