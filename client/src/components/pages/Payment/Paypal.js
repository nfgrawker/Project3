import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PaypalButton from './PpButt/PaypalButton';
import axios from 'axios';

const CLIENT = {
  sandbox: 'AVadhup9z-8Iltl3F8WEvOYLMLiJwH44BPbVGO8ldyyS8II6tx7WiIjplNQ-7rEttjlIpYUa9zwJW42J',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'sandbox'
  ? 'production'
  : 'sandbox';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
});

function Pricing(props) {
const tiers = [
  {
    title: '10',
    price: '1',
    buttonText: 'Checkout',
    buttonVariant: 'outlined',
    total:1
  },
  {
    title: '100',
    subheader: 'Most popular',
    price: '10',
    buttonText: 'Checkout',
    buttonVariant: 'contained',
    total:10
  },
  {
    title: '1000',
    price: '100',
    buttonText: 'Checkout',
    buttonVariant: 'outlined',
    total:100
  },
];



  const { classes } = props;

    const onSuccess = (payment) => {
      var objectToPass = {raffle:req.match.params.id, amount:payment.amount,}
      axios.post('/api/paymentpage', {
        paymentID: payment.paymentID,
        payerID: payment.payerID
      });
      axios.post("/api/posttickets")
      console.log('Successful payment!', payment);}


    const onError = (error) => console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) => console.log('Cancelled payment!', data)
    let currency = 'USD';


  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>

        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          How many raflle tickets do you want?
          </Typography>

        </div>

        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                  </div>

                </CardContent>
                <CardActions className={classes.cardActions}>
                <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={currency}
          total={tier.total}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
                </CardActions>
              </Card>
            </Grid>
          ))}

        </Grid>
      </main>

    </React.Fragment>
  );
}



export default withStyles(styles)(Pricing);
