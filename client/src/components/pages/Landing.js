import React, { Component } from "react";
<<<<<<< HEAD
import Parallax from "react-springy-parallax";
=======
// import impact from "../../impact.png";
import NonProfitBanner from "../Banners/NonProfitBanner";
require("./Landing.css");
>>>>>>> 33137be9c71d96f3396c08eac80cd1ea305230e2

// var sectionStyle = {
//   height: "300px",
//   width: "100%",
//   backgroundSize: "100%",
//   backgroundImage: `url(${homeBg})`

<<<<<<< HEAD
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";
import homeBg from "../../homeBg.svg";

var sectionStyle = {
  height: "2800px",
  width: "100%",
  backgroundSize: "100%",
  backgroundImage: `url(${homeBg})`
};
=======
// };
>>>>>>> 33137be9c71d96f3396c08eac80cd1ea305230e2

class Home extends Component {
  render() {
    return (
<<<<<<< HEAD
      
        <div style={sectionStyle}>
          <div className="Site-content">
            <Parallax ref="parallax pages={3}">
              <Parallax.Layer //Page offset, or where the layer will be at
                // 0 means start, 1 second page, and so on
                offset={0}
                // Parallax factor, allows for positive and negative values
                // Shifts the layer up or down in accordance to its offest
                speed={0.5}
                // Layer accepts all common props like styles, classNames, events
                style={styles}
                // The main Parallax component props has automated scrolling built in
                onClick={() => this.refs.parallax.scrollTo(1)}
              >
                Click!
              </Parallax.Layer>
            </Parallax>
          </div>
        </div>
      
=======
      <div>
        {/* <NonProfitBanner /> */}

      
      </div>
>>>>>>> 33137be9c71d96f3396c08eac80cd1ea305230e2
    );
  }
}

export default Home;
