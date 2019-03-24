import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";


class AdmissionsTests extends Component {

    render(){
      console.log("AdmissionsTests data for collapsible:"+ this.props.data)
      return(
          <div id="Admissions Tests">
               
               
            <div className="hubinfobox">
            Admissions Tests:
        <Slider>
          <div className="fullwidth">
          {this.props.data}
          </div>
        </Slider>

           </div>

      </div>          
      )
    }
  }

export default AdmissionsTests