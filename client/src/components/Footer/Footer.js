import React from "react";
import PropTypes from "prop-types";
import Links from "./Links/Links";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
    top: "auto",
    bottom: 0
  }
});

function Album(props) {
  const { classes } = props;

  return (
    <div className="background">
      <React.Fragment>
        <footer
          className={classes.footer}
          style={{
            backgroundColor: "#212121"
          }}
        >
          <Links />
          <br />
          <Typography variant="h6" align="center" gutterBottom />
          <Typography
            variant="subtitle1"
            align="center"
            color="primary"
            component="p"
          >
            <p> © 2018 Copyright: Wonderfundgroup.com</p>
            
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    </div>
  );
}

// Album.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Album);
