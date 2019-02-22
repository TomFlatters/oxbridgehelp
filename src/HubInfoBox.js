import React, { Component } from 'react';
import './App.css';

import Collapsible from 'react-collapsible';

class HubInfoBox extends Component {

    render(){
      console.log("Data for collapsible:"+ this.props.data[1])
      return(
          <div>
        
      <Collapsible className="hubinfobox" openedClassName="hubinfobox" trigger={this.props.url}>

      <div className="collapsiblerow">
        <div className="displaydata">
        </div>
        <div className="datanav">
          

        </div>
      </div>
       
      </Collapsible>
          
        </div>
      )
    }
  }

export default HubInfoBox