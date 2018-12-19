import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

class Hub extends Component {

    render(){
      return(
        <div className="hub">

        <div className="hubheader">
          <div className="header1">          </div>
          <div className="header2">          </div>
        </div>

        <div className="hubsearchcontainer">
        <div className="hubsearchposition">
          Find courses, subjects and other useful stuff:
          <div className="hubsearchbar">
          SEARCH BAR
          </div>
        </div>
        </div>

        </div>
      )
    }
  }

export default Hub