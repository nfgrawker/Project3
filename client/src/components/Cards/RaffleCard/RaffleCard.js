import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

function shutter(i, els) {
  const wrapIndex = i => i % els.length;
  return [
    els[wrapIndex(i)],
    els[wrapIndex(i + 1)],
    els[wrapIndex(i + 2)],
    els[wrapIndex(i + 3)],
    els[wrapIndex(i + 4)],
    els[wrapIndex(i + 5)]
  ];
}
var styles = {
  margin: "20px",
  width: "300px",
  height: "450px",
  display: "inline-block"
};

const cards = [1, 2, 3];

class RaffleCard extends Component {
  state = { index: 0 };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <main>
          {this.props.raffle
            ? shutter(this.state.index, this.props.raffle).map(raffle => (
                <Card className="card" style={styles}>
                  <CardMedia
                    component="img"
                    className="media"
                    image={raffle.prize.image}
                  />
                  <CardContent className="cardContent">
                    <Typography>{raffle.prize.name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Typography>{raffle.prize.description}</Typography>
                    <Button size="small" color="primary">
                      <a href="../raffles/:id" />
                      Link
                    </Button>
                  </CardActions>
                </Card>
              ))
            : null}
        </main>
      </React.Fragment>
    );
  }
}

RaffleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default RaffleCard;
