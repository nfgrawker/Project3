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
  icons: {
    fontSize: '35px'
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
          <Grid item xs={6} className="iconBox">
            <DoneOutline  className={classes.icons} />
          </Grid>
          <Grid item xs={6} className="counterText">
              <CountUp end={props.totalraffles} />
              Total Raffles
          </Grid>
                
          </Paper>
        </Grid>
       
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <Grid item xs={6} className="iconBox">
            <MonetizationOn className={classes.icons} />
          </Grid>
          <Grid item xs={6} className="counterText">
            <CountUp end={props.moneyraised} />
            In Donations
          </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <Grid item xs={6} className="iconBox">
            <ThumbUp className={classes.icons} />
          </Grid>
          <Grid item xs={6} className="counterText">
           <CountUp end={props.followers} />
             Followers 
          </Grid>
           
          </Paper>
        </Grid>

       
      </Grid>
    </div>
  );
}


export default withStyles(styles)(StatBoxes);
