import React, { Component } from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function shutter(i, els) {
  if (els.length === 0) return els
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
  overflow: "auto",
  display: "inline-block"
};

const cards = [1, 2, 3];

class NonProfitCard extends Component {
  state = { index: 0 };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <main>
          {this.props.nonprofit
            ? shutter(this.state.index, this.props.nonprofit).map(nonprofit => (
                <Card className="card" style={styles}>
                  <CardMedia
                    component="img"
                    className="media"
                    image={nonprofit.imageLink}
                  />
                  <CardContent className="cardContent">
                    <Typography>{nonprofit.name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Typography>{nonprofit.description}</Typography>
                    <Link to={`/prizes/${nonprofit._id}`}>
                      <Button size="small" color="primary">
                        Link
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              ))
            : null}
        </main>
      </React.Fragment>
    );
  }
}
//test
export default NonProfitCard;
