import React, { Component } from "react";
import RaffleItems from "../../RaffleItems";
import Grid from '@material-ui/core/Grid';
import NonProfitInfo from "../../NonProfitInfo";
import axios from 'axios';

class PrizePage extends Component {


  componentDidMount() {
    axios.get(`/api/NonProfit/:id`)
      .then(res => {
        this.setState({ image:res.data.imageLink, name:res.data.name, website:res.data.website, description:res.data.description });
      })
  }

  render() {
    return (
      <div className="prizes-page">
        <Grid>
        <NonProfitInfo> 
          image={this.state.image}
          name={this.state.name}
          website:{this.state.website}
          description:{this.state.description}
        </NonProfitInfo>
        
        <RaffleItems>
        </RaffleItems>
        </Grid>
      </div>
    );
  }
}
export default PrizePage;