import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import './style.css';

function RaffleItems() {
  return (
    
    <Card className="card">
    <CardContent>
      <Typography className="title" color="textSecondary" gutterBottom id="title">
        Available Raffle Items
      </Typography>
      <Divider variant="middle" />
    <Grid container justify="center" alignItems="center">
    <Avatar alt="Choose your own" src="http://dojour.us/media/users/1715/freature-choose-your-own-adventure-cover_lg_bTsLLtc.jpeg" className="bigAvatar" id="RoundRaffles" />
      <Avatar alt="Remy Sharp" src="https://cdn8.bigcommerce.com/s-4erg8hlk42/images/stencil/1280x1280/products/51500/52423/Winfield-Vik__04752.1521656868.jpg?c=2" className="bigAvatar" id="RoundRaffles"/>
      <Avatar alt="Remy Sharp" src="https://4f39zz3w9kga2mxwan2t1zsc-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Popcorn-300x225.jpg" className="bigAvatar" id="RoundRaffles" />
      <Avatar alt="Remy Sharp" src="http://cdn3.volusion.com/rolzx.qntbs/v/vspfiles/photos/21Rutb9999-2.jpg" className="bigAvatar" id="RoundRaffles" />
    </Grid>
    </CardContent>
    </Card>
  );
}


export default RaffleItems;
