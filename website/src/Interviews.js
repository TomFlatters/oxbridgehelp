import React, { Component } from 'react';
import './App.css';

import Collapsible from 'react-collapsible';

class Interviews extends Component {

    render(){
      console.log("Interviews data for collapsible:"+ this.props.data)
      return(
          <div>
        
      <Collapsible className="hubinfobox" closedClassName="hubinfobox" openedClassName="hubinfobox" trigger={this.props.url} triggerClassName="fullheight"triggerOpenedClassName="fullheight">

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

export default Interviews