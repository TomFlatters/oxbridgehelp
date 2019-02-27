import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

class Main extends Component {

    render(){
      return(
        <div className="main">
        <div className="maintext">
          <div className="maintitle">
            Start your Oxbridge journey.
          </div>
          <div className="shrinkbutton">
          <Link to="/why-apply">
          <div className="findouthow">
              Find out how.
            </div>
            </Link>
            </div>
        </div>
        </div>
      )
    }
  }

export default Main