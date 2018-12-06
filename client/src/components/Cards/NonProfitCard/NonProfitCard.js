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

function shutter(i, els) {
  const wrapIndex = i => i % els.length;
  return [els[wrapIndex(i)], els[wrapIndex(i + 1)], els[wrapIndex(i + 2)]];
}
//tree

class NonProfitCard extends Component {
  state = { index: 0 };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {this.props.nonprofit
            ? shutter(this.state.index, this.props.nonprofit).map(
                ({ imageLink, name, description }) => (
                  <div className="layout cardGrid">
                    <Grid
                      container
                      spacing={40}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <Grid sm={6} md={4} lg={3}>
                        <Card className="card">
                          <CardMedia
                            component="img"
                            className="media"
                            image={imageLink}
                          />
                          <CardContent className="cardContent">
                            <Typography>{name}</Typography>
                          </CardContent>
                          <CardActions>
                            <Typography>{description}</Typography>
                            <Button size="small" color="primary">
                              <a href="/prizes/:id" />
                              Link
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Grid>
                  </div>
                )
              )
            : null}
        </main>
      </React.Fragment>
    );
  }
}

export default NonProfitCard;
