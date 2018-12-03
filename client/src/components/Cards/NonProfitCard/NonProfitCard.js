
import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


function NonProfitCard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
    
        <div className={classNames(classes.layout, classes.cardGrid)}>
    
          <Grid container spacing={40}>
           
              <Grid sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.waynecojournalbanner.com/wp-content/uploads/2017/05/American-Red-Cross.jpg"
                    title="Non Profit Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>
                    Non Profit Card
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography>
                      Description here
                    </Typography>
                    <Button size="small" color="primary">
                      <a href="/prizes/:id" />Link
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}


export default withStyles(styles)(NonProfitCard);
