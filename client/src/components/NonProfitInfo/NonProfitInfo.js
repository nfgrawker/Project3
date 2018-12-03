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

const styles = {
  card: {
    padding: 20,
  },

  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: 200,
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
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Non-Profit-Image"
          className={classes.media}
          height="140"
          image={this.props.image}
          title={this.props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          {this.props.name}
          </Typography>
          <Typography component="p" className={classes.body}>
          {this.props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

NonProfitInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NonProfitInfo);
