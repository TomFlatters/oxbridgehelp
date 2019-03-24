import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

class RelatedSubjects extends Component {

    render(){
      var data = this.props.data;
      console.log(this.props.data);
      console.log(typeof data);

      return(
          <div id="Related Subjects">

        <div className="hubinfobox">
        Related Subjects:
          <Slider>
        <div className="fullwidth">
       {data}
        </div>
          </Slider>
          </div>

      </div>
      )
    }
  }

export default RelatedSubjects