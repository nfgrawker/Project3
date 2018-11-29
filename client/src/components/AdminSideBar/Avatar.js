import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt={props.userName} src={props.userImage} className={classes.bigAvatar} />
      <h5 name={props.userName}>{props.userName}</h5>
    </Grid>
  );
}

export default withStyles(styles)(ImageAvatars);