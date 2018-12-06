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
      _id: this.props.userinfo._id,
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
    //     .catch(err => console.log(err));
    // } else {
    //   alert("this is wrong");
    // }
  }

  render() {
    console.log(this.props.userinfo);
    const user = this.props.userinfo;

    return (
      <div>
        <Paper className="genBox" elevation={1}>
          <div className="input-container">

          {/* NonProfit Name */}
            <div item className="input-field inline">
              <i className="material-icons prefix">mode_edit</i>
              <input
                placeholder={user.name}
                id="user_name"
                type="text"
                className="validate"
                onChange={this.handleChange("name")}
              />
            </div>

             {/* Website */}
             <div className="input-field inline">
              <i className="material-icons prefix">mode_edit</i>
              <input
                placeholder={user.website}
                label="website"
                type="text"
                className="validate"
                onChange={this.handleChange("website")}
              />
            </div>
           
          </div>

              <div id="formContact" className="input-container">
           {/* Contact Name */}
           <div item className="input-field inline">
              <i className="material-icons prefix">account_circle</i>
              <input
                placeholder={user.contactName}
                id="contact_name"
                label="contact Name"
                type="text"
                className="validate"
                onChange={this.handleChange("contactName")}
              />
            </div>
            {/* Contact Number */}
          <div className="input-container">
            <div className="input-field">
              <i className="material-icons prefix">local_phone</i>
              <input
                placeholder={user.contactNumber}
                label="contact Number"
                type="tel"
                className="validate"
                onChange={this.handleChange("contactNumber")}
              />
            </div>
            </div>

            {/* Address */}
            <div className="input-field">
              <i className="material-icons prefix">location_on</i>
              <input
                placeholder={user.address}
                label="address"
                type="text"
                className="materialize-textarea"
                onChange={this.handleChange("address")}
              />
            </div>
           
            {/* Image Link */}
            <div className="input-field">
              <i className="material-icons prefix">image</i>
              <input
                placeholder={user.imageLink}
                label="image link"
                type="text"
                className="validate"
                onChange={this.handleChange("imageLink")}
              />
            </div>
            {/* Description */}
            <div className="input-field">
              <i className="material-icons prefix">mode_edit</i>
              <input
                placeholder={user.description}
                label="description"
                type="text"
                rows="5"
                className="materialize-textarea"
                onChange={this.handleChange("description")}
              />
            </div>
            
          </div>

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
