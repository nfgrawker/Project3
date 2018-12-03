import React, { Component } from "react";
import RaffleItems from "../../RaffleItems";
import Grid from '@material-ui/core/Grid';
import NonProfitInfo from "../../NonProfitInfo";
import axios from 'axios';

class PrizePage extends Component {
    state = {image:"https://via.placeholder.com/350x150",name:"none", website:"none", description: "none"};


  componentDidMount() {
      console.log(this.props.match.params.id)
    axios.get('/api/NonProfit/'+this.props.match.params.id)
      .then(res => {
        this.setState({name:res.data.name, image:res.data.image, website: res.data.website, description:res.data.description  })
      })
  }

  render() {
    return (
      <div className="prizes-page">
        <Grid>
        <NonProfitInfo image={this.state.image} name={this.state.name} website={this.state.website} description={this.state.description}/>
        <RaffleItems />
        </Grid>
      </div>
    );
  }
}
export default PrizePage;