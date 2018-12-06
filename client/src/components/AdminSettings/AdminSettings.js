import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./style.css";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class UserSetting extends Component {
  state = {
    name: "",
    address: "",
    contactName: "",
    contactNumber: "",
    website: "",
    imageLink: "",
    description: ""
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  // handle settings submit
  handleFormSubmit(event) {
    event.preventDefault();
    let update = this.state;
    let updatedInfo = {
      _id: this.props.userid,
      name: update.name,
      address: update.address,
      contactName: update.contactName,
      contactNumber: update.contactNumber,
      website: update.website,
      imageLink: update.imageLink,
      description: update.description
    };
    console.log(updatedInfo);
    // if (updatedInfo) {
    //   axios
    //     .put("/api/nonprofit/" + this.props.match.params.id, updatedInfo)
    //     .then(this.loadAllPrizes())
    //     .catch(err => console.log(err));
    // } else {
    //   alert("this is wrong");
    // }
  }

  render() {
    console.log(this.props._id);
    const user = this.props.userinfo;

    return (
      <div>
        <Paper className="genBox" elevation={1}>
          <Grid item className="input-field" xs={6}>
            <input
              placeholder={user.name}
              id="user_name"
              type="text"
              className="validate"
              onChange={this.handleChange("name")}
            />
            <input
              placeholder={user.contactName}
              label="contact Name"
              type="text"
              className="validate"
              onChange={this.handleChange("contactName")}
            />
          </Grid>
          <Grid item className="input-field" xs={6}>
            <input
              placeholder={user.contactNumber}
              label="contact Number"
              type="text"
              className="validate"
              onChange={this.handleChange("contactNumber")}
            />
            <input
              placeholder={user.website}
              label="website"
              type="text"
              className="validate"
              onChange={this.handleChange("website")}
            />
          </Grid>
          <Grid item className="input-field" xs={12}>
            <input
              placeholder={user.imageLink}
              label="image link"
              type="text"
              className="validate"
              onChange={this.handleChange("imageLink")}
            />

            <input
              placeholder={user.description}
              label="description"
              type="text"
              className="materialize-textarea"
              onChange={this.handleChange("description")}
            />
            <input
              placeholder={user.description}
              label="address"
              type="text"
              className="materialize-textarea"
              onChange={this.handleChange("address")}
            />
          </Grid>

          {/* Submit Button */}
          <div>
            <Button
              onClick={this.handleFormSubmit.bind(this)}
              variant="outlined"
            >
              Submit
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}
export default UserSetting;
