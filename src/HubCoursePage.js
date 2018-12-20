import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom';

class HubCoursePage extends Component {

    render(){
      return(
        <div className="hubcoursepage">
        <Link to="/the-hub">back to the hub</Link>
        <div className="row">
        <h1 className="hubcoursetitle">{this.props.uni} ></h1> 
        <h1 className="hubcoursetitle">> {this.props.name} </h1>
        </div>
        </div>
      )
    }
  }

export default HubCoursePage