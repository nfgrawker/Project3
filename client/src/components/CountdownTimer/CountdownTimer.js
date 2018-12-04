import React from 'react';
import { withStyles } from '@material-ui/core/styles';


class CountdownTimer extends React.Component {
    render() {
       return (
        <div>
         <h1 style={{ fontSize: 100, marginLeft:100 }}> </h1>
        </div>
      );
    }
  }

export default withStyles(styles)(CountdownTimer);