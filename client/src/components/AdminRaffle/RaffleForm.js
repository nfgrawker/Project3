import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from './TextInput';
import TextInput from './TextInput';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 30px'
  },
  buttonDiv: {
    display: 'inline-block'
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class RaffleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      itemname:'', 
      description:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //const { name, value } = event.target;
    console.log(event.target.value);
    this.setState({
      value: event.target
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        
        <input
          itemname ={this.state.value}
          onChange={this.handleChange}
          id="outlined-full-width"
          label="Item Name"
          style={{ margin: 8 }}
          placeholder = "Item Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <input
          description ={this.state.value}
          onChange={this.handleChange}
          id="outlined-full-width"
          label="Item Description"
          style={{ margin: 8 }}
          placeholder = "Item Description"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      
        <div className={classes.buttonDiv}>
        <Button variant="outlined" className={classes.button}>
            Submit
        </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(RaffleForm);


