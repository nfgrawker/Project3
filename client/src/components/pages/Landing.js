import React, { Component } from 'react';


import homeBg from "../../homeBg.svg";

var sectionStyle = {
  height: "2800px",
  width: "100%",
  backgroundSize: "100%",
  backgroundImage: `url(${homeBg})`
};


class Home extends Component {

 
  render() {
    return (
        <div style={sectionStyle}>
        <div className="Site-content">
           
                
            
            <div className="main">
                {/* <Container /> */}
            </div>
        </div>
    </div>
    );
  }
}


export default Home;