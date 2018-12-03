import React from "react";
import './style.css'
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class OutlinedTextFields extends React.Component {
  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
        <TextField
          required
          id="outlined-full-width"
          label="Item Name"
          style={{ margin: 8 }}
          fullWidth
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-full-width"
          label="More Info"
          style={{ margin: 8 }}
          fullWidth
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-multiline-static"
          label="Item Description"
          multiline
          rows="4"
          className={classes.textField}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        </div>
    );
  }
}


export default withStyles(styles)(OutlinedTextFields);
