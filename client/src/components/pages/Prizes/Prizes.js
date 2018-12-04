import React, { Component } from "react";
import RaffleItems from "../../RaffleItems";
import Grid from '@material-ui/core/Grid';
import NonProfitInfo from "../../NonProfitInfo";
import axios from 'axios';
import NonProfitCard from "../../Cards/NonProfitCard/NonProfitCard";



class PrizePage extends Component {
    state = {image:"https://via.placeholder.com/350x150",name:"none", website:"none", description: "none", prizeimg:"none", prizename:"none", prizeprice:"none"};


  componentDidMount() {
      console.log(this.props.match.params.id)

    axios.get('/api/NonProfit/'+this.props.match.params.id)
      .then(res => {
        this.setState({name:res.data.name, image:res.data.imageLink, website: res.data.website, description:res.data.description  })
          console.log(res.data.image)
      })

    axios.get('/api/Prize/all/get')
      .then(res => {
        this.setState({prizes:res.data })
        console.log(res.data)
      })  

    axios.get('/api/nonprofit/all/get')
    .then(res => {
      this.setState({nonprofit:res.data })
      console.log(res.data)
    })  
  }

  render() {
    return (
      <div className="prizes-page">
        <Grid>

        <NonProfitInfo image={this.state.image} name={this.state.name} website={this.state.website} description={this.state.description}/>

        <RaffleItems prizes={this.state.prizes} />

        <NonProfitCard nonprofit={this.state.nonprofit} />
        
        </Grid>
      </div>
    );
  }
}
export default PrizePage;