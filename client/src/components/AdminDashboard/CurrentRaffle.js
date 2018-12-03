import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    height: '300px'
  },
});

function CurrentRaffle(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <h4>Current Raffle </h4>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          
            <h4>Money Raised </h4>
            
          </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}


export default withStyles(styles)(CurrentRaffle);
