import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import DoneOutline from '@material-ui/icons/DoneOutline';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import ThumbUp from '@material-ui/icons/ThumbUp';


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
            <div><DoneOutline />  Raffles  </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <CountUp end={props.moneyraised} />
            <div><MonetizationOn />  Money Raised </div>
            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <CountUp end={props.followers} />
            <div><ThumbUp />  Followers </div>
            
          </Paper>
        </Grid>

       
      </Grid>
    </div>
  );
}


export default withStyles(styles)(StatBoxes);
