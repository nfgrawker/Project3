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
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const StatBoxes = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} {...props}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
           <CountUp end={props.daysJoined} />
            <h5> Something </h5>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <CountUp end={props.moneyraised} />
            <h5>Money Raised </h5>
            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <CountUp end={props.followers} />
            <h5>Followers </h5>
            
          </Paper>
        </Grid>

       
      </Grid>
    </div>
  );
}


export default withStyles(styles)(StatBoxes);
