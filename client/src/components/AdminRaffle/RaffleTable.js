import React, { Component } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";

class RaffleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checkedA: false,
      };
  }
  handleChange = name => event => {
      console.log("click")
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <Paper>
        <table className="highlight container">
          <thead>
            <tr>
                <th>Select</th>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table>
      </Paper>
    );
  }
}
export default RaffleTable;
