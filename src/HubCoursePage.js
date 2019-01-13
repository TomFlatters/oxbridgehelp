import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom';

import HubLinkBox from './HubLinkBox';
import HubInfoBox from './HubInfoBox';

const sections = [
  "section1", "section2", "section3"
]

class HubCoursePage extends Component {

    render(){
      return(
        <div className="hubcoursepage">
        <div className="hubrow">
        <Link to="/the-hub">Go back</Link>

        <h1 className="hubcoursetitle">{this.props.uni} ></h1> 
        <h1 className="hubcoursetitle">> {this.props.name} </h1>
        <h2 className="linktocourse">LINK</h2>
        </div>

<div className="scrollablehub">

        <div className="hubrowspaced">
        {sections.map((value) => {  
              var url = "#" + value   
              // Return the element  
              return (<HubLinkBox url={url}/> )})}
        </div>

        {sections.map((value) => {  
              var url = "#" + value   
              // Return the element  
              return (
        <div className="hubrowspaced">
        <HubInfoBox url={url}/>
        </div>
         )})}
      

</div>

        </div>
      )
    }
  }

export default HubCoursePage