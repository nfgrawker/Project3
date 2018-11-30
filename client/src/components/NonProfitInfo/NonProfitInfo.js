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
          image="https://topnonprofits.com/wp-content/uploads/2012/01/American-Red-Cross-logo-best-nonprofit-logos-copy.png"
          title="American Red Cross"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            American Red Cross
          </Typography>
          <Typography component="p" className={classes.body}>
          The American Red Cross, also known as The American National Red Cross, is a humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education in the United States.
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
