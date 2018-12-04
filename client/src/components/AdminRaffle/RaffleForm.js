import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "./TextInput";
import TextInput from "./TextInput";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 30px"
  },
  buttonDiv: {
    display: "inline-block"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class RaffleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      raffles: [],
      name: "",
      title: "",
      imagelink: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.title, this.state.description, this.state.imagelink);
    this.setState({});
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <input
          value={this.state.value}
          name="title"
          onChange={this.handleChange}
          id="outlined-full-width"
          label="Item Name"
          style={{ margin: 8 }}
          placeholder="Item Name"
          className={classes.textField}
        />
        <input
          value={this.state.value}
          name="imagelink"
          onChange={this.handleChange}
          id="outlined-full-width"
          label="Item Description"
          style={{ margin: 8 }}
          placeholder="Image Link"
          className={classes.textField}
        />
        <input
          value={this.state.value}
          name="description"
          onChange={this.handleChange}
          id="outlined-full-width"
          label="Item Description"
          style={{ margin: 8 }}
          placeholder="Item Description"
          className={classes.textField}
        />

        <div className={classes.buttonDiv}>
          <Button
            onClick={this.handleFormSubmit}
            variant="outlined"
            className={classes.button}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(RaffleForm);
