import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import './style.css';

function shutter(i, els) {
  const wrapIndex = i => i % els.length
   return  [els[wrapIndex(i)], els[wrapIndex(i + 1)], els[wrapIndex(i +2)] ]
      }

 class RaffleItems extends Component {
   state = {index:0}
   render() {
    console.log(this.props.prizes)
  return (
    
    <Card className="card">
    <CardContent>
      <Typography className="title" color="textSecondary" gutterBottom id="title">
        Available Raffle Items
      </Typography>
      
      <Divider variant="middle" />
    
      <Grid container justify="center" alignItems="center">
      
      {this.props.prizes ? shutter(this.state.index, this.props.prizes).map(({image, name, quanity}) => 

      <Avatar class="flip-box" className="bigAvatar">
        <Avatar class="flip-box-inner">
          <Avatar class="flip-box-front">
            <img class="Prizeimg" src={image}  />
          </Avatar>
         <Avatar class="flip-box-back">
           <h2>{name}</h2>
           <p>{quanity}</p>
          </Avatar>
        </Avatar>
      </Avatar>):null}
      
    </Grid>
    </CardContent>
    </Card>
  );
}
}


export default RaffleItems;
