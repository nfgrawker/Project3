import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


const styles = {
  card: {
    maxWidth: 345,
    margin: "10px 0 0 10px",
  },
  media: {
    height: 140,
  },
};


function shutter(i, els) {
  const wrapIndex = i => i % els.length
   return  [els[wrapIndex(i)], els[wrapIndex(i + 1)], els[wrapIndex(i +2)], els[wrapIndex(i +3)], els[wrapIndex(i+4)], els[wrapIndex(i+5)] ]
      }

const cards = [1, 2, 3];

class RaffleCard extends Component {
  state = {index:0}

  render(){
  return (
    
    <React.Fragment>
      <CssBaseline />
      <div className="layout cardGrid">
      <main>

            {this.props.raffle ? shutter(this.state.index, this.props.raffle).map((raffle) =>
<div className="layout cardGrid">

    <Grid container spacing={40} container justify="center" alignItems="center">
     
        <Grid sm={6} md={4} lg={3}>
          <Card className="card">
            <CardMedia
              component="img"
              className="media"
              image={raffle.prize.image}

            />
            <CardContent className="cardContent">
              <Typography>
              {raffle.prize.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography>
               {raffle.prize.description}
              </Typography>
                <Link to={`/raffle/${raffle._id}`}>
                    <Button  size="small" color="primary">
                        Links
                    </Button>
                </Link>
            </CardActions>
          </Card>
        </Grid>
      
    </Grid>
  </div>):null}
</main>
</div>
</React.Fragment>
);
}
}



RaffleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default RaffleCard;