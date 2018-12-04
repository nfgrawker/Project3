import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import infoStyle from "./infoStyle.jsx";

function InfoArea({ ...props }) {
  const { classes, title, description} = props;
  
  
  return (
    <div className={classes.infoArea}>
     
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}


InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

};

export default withStyles(infoStyle)(InfoArea);
