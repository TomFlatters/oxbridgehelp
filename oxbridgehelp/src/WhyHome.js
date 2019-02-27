import React, { Component } from 'react';
import './App.css';

class WhyHome extends Component {

    render(){
      return(
        <div className="whyhome">
        <div className="whyhomevideo">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zSz-panKqwE"
         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen>
        </iframe>      
        </div>
        <div className="whyhometext">
        <div className="whyhometitle" id="whyapply">
          Why apply?
        </div>
        <div className="whyhomebody">
         When it comes to picking unis, it's vital to consider all your options.
         Our video guides will help you do just that.
        </div>
        </div>
        </div>
      )
    }
  }

export default WhyHome