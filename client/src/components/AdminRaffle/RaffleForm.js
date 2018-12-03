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
  },
  input: {
    display: 'none',
  }
});

class RaffleForm extends React.Component {
  state = {
    name: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextInput />
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


