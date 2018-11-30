import React, { Component } from "react";
import RaffleItems from "../../RaffleItems";
import Grid from '@material-ui/core/Grid';
import NonProfitInfo from "../../NonProfitInfo";

class PrizePage extends Component {

  render() {
    return (
      <div className="prizes-page">
        <Grid>
        <NonProfitInfo></NonProfitInfo>
        
        <RaffleItems>
        </RaffleItems>
        </Grid>
      </div>
    );
  }
}
export default PrizePage;