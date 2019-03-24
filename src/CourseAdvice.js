import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

class CourseAdvice extends Component {

    render(){
      var data = this.props.data
      console.log("course advice data: " + data)
      return(
          <div id="Course Advice">
        
      <div className="hubinfobox">
      Course Advice:
      <Slider>
        <div className="fullwidth">
        {data ? (
          data.map((value) => {
          return(<div>{value}</div>)
        })
        )
        : (<div>No data available!</div>)
        }
        </div>
      </Slider>
      </div>
            
        </div>
      )
    }
  }

export default CourseAdvice