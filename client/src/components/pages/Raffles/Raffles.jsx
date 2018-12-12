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
import RaffleCard from "../../Cards/RaffleCard";
import axios from "axios";

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
class Raffles extends React.Component {
  profile;
  state = {
    auth: null,
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  componentDidMount() {
    axios.get("/api/raffle/all/get").then(res => {
      this.setState({ raffle: res.data });
      console.log(res.data);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <main>
          <div
            style={{
              backgroundImage:
                "url(" +
                "https://static.vecteezy.com/system/resources/previews/000/104/601/original/golden-glitter-background-vector.jpg" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            className={classes.heroUnit}
          >
            <div className={classes.heroContent}>
              <div>
                <Typography
                  align="center"
                  color="textPrimary"
                  gutterBottom
                  style={{
                    color: "#00CAF2",
                    fontWeight: "bold",
                    fontSize: "7em",
                    width: "258",
                    height: "36"
                  }}
                >
                  Dream big.
                </Typography>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Every Wonderfund campaign supports an incredible cause and gets
              you the chance to win an amazing prize!
            </Typography>
            {/* End hero unit */}
            <Grid align="center" container spacing={40}>
              <RaffleCard raffle={this.state.raffle} />
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Raffles);
