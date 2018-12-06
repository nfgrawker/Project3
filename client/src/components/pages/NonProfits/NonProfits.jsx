import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import NonProfitCard from '../../Cards/NonProfitCard'

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },

  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
});

class NonProfits extends React.Component {
  profile;
state = {
  auth: null,
  anchorEl: null,
  mobileMoreAnchorEl: null,
  nonprofit:[]
};

componentDidMount() {
  

  axios.get('/api/nonprofit/all/get').then(res => {
    this.setState({ nonprofit: res.data });
    console.log(res.data);
  });
}

render() {
  const { classes } = this.props;
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              >
              causes
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
              >
              Check out all of the wonderful causes we’ve worked with, and
              discover the ways they’re impacting the world. Click on a non
              profit to begin a raffle in their name!
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
          <NonProfitCard nonprofit={this.state.nonprofit}/>
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}
}


export default withStyles(styles)(NonProfits);
