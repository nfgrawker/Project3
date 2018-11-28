import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

const styles = {

  card: {
    margin: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,

  },
  bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    


    <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Current Raffles
      </Typography>
      <Divider variant="middle" />
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="https://cdn8.bigcommerce.com/s-4erg8hlk42/images/stencil/1280x1280/products/51500/52423/Winfield-Vik__04752.1521656868.jpg?c=2" className={classes.bigAvatar} />
      <Avatar alt="Remy Sharp" src="https://4f39zz3w9kga2mxwan2t1zsc-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Popcorn-300x225.jpg" className={classes.bigAvatar} />
      <Avatar alt="Remy Sharp" src="http://cdn3.volusion.com/rolzx.qntbs/v/vspfiles/photos/21Rutb9999-2.jpg" className={classes.bigAvatar} />
    </Grid>
    </CardContent>
    </Card>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
