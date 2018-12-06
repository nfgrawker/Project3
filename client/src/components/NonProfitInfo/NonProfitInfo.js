import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const styles = {
  card: {
    padding: 20,
  },

  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'fill',
    height: 450,
  },

  title: {
    textAlign: 'center', 
  },

  body: {
    textAlign: 'center',  
  },
};

function NonProfitInfo(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <a href={props.website} target="_blank">
      <CardActionArea>
        <CardMedia
            component="img"
            alt="Non-Profit-Image"
            className={classes.media}
            height="280"
            image={props.image}
            title={props.name}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          {props.name}
          </Typography>
          <Typography component="p" className={classes.body}>
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>
    </Card>
  );
}


export default withStyles(styles)(NonProfitInfo);
