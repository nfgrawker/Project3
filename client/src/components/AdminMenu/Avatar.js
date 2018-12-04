import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
};

const ImageAvatars = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={props.image || 'https://via.placeholder.com/80'} className={classes.bigAvatar} />
    </Grid>
  );
}


export default withStyles(styles)(ImageAvatars);
