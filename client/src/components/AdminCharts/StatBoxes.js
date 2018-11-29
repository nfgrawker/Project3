import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function StatBoxes(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h4>Current Raffle {props.moneyRaised}</h4>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h4>Money Raised {props.moneyRaised}</h4>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h4>Followers {props.moneyRaised}</h4>
          </Paper>
        </Grid>

       
      </Grid>
    </div>
  );
}


export default withStyles(styles)(StatBoxes);
