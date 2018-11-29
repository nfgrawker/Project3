import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

require("./style.js");
require("../../../App.css");

const styles = theme => ({

});

class Test extends React.Component {

    render() {
        return (
            <h1>test</h1>
        )
    }
}



export default withStyles(styles)(Test);
