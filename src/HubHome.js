import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

class HubHome extends Component {

    render(){
      return(
        <div className="hubhome">
          <div className="hubtitle">
              Any Tips?
          </div>
          <div className="hubtext">
              Whether it's Oxford or Cambridge, Maths or Greek...
          </div>
          
          <div className="shrinkbutton">
          <Link styles={{
                textdecoration: "none",
                color: "white",
            }}to="/the-hub"
            >
            <div className="findouthow" id="lessmargin">
             Go to The Hub.
            </div>
            </Link>
            </div>

        </div>
      )
    }
  }

export default HubHome