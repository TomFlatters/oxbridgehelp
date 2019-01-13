import React, { Component } from 'react';
import './App.css';

import Collapsible from 'react-collapsible';

class HubInfoBox extends Component {

    render(){
      return(
          <div>
        
      <Collapsible className="hubinfobox" openedClassName="hubinfobox" trigger={this.props.url}>

      <div className="collapsiblerow">
        <div className="displaydata">
            display data here
        </div>
        <div className="datanav">
            navigation here
        </div>
      </div>
       
      </Collapsible>
          
        </div>
      )
    }
  }

export default HubInfoBox