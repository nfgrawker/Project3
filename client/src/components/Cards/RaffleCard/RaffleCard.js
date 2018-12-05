import React from 'react';
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

const styles = {
  card: {
    maxWidth: 345,
    margin: "10px 0 0 10px",
  },
  media: {
    height: 140,
  },
};

const cards = [1, 2, 3];

function RaffleCardAlbum(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classNames(classes.layout, classes.cardGrid)}>
      <main>
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="http://images.pitchero.com/ui/1781722/image_5bc8413691589.png"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Raffle Name
                      </Typography>
                      <Typography component="p">
                        This is the summary of a demo raffle. It contains lots of valuable information about the prize that you could win.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn more about this raffle
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
      </main>
      </div>
    </React.Fragment>
  );
}

RaffleCardAlbum.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaffleCardAlbum);