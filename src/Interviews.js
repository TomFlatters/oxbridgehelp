import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

class Interviews extends Component {

    render(){
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      var data = this.props.data

      console.log("Interviews data for collapsible:"+ data)
      return(
      <div id="Interviews">
      <div className="hubinfobox">
      Interviews:
        <Slider {...settings} className="fullwidth">
        {data ? (
          data.map((value) => {
          return(<div>{value}</div>)
        })
        )
        : (<div>No data available!</div>)
        }
        </Slider>
       
      </div>
      </div>
      )
    }
  }

export default Interviews


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black"}}
      onClick={onClick}
    />
  );
}
