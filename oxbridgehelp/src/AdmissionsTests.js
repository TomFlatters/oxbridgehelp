import React, { Component } from 'react';
import './App.css';

import Collapsible from 'react-collapsible';

class AdmissionsTests extends Component {

    render(){
      console.log("AdmissionsTests data for collapsible:"+ this.props.data)
      return(
          <div>
        
      <Collapsible className="hubinfobox" closedClassName="hubinfobox" openedClassName="hubinfobox" trigger={this.props.url} triggerClassName="fullheight"triggerOpenedClassName="fullheight">

      <div className="collapsiblerow">
        <div className="displaydata">
          {this.props.data}
        </div>
        <div className="datanav">
          

        </div>
      </div>
       
      </Collapsible>
          
        </div>
      )
    }
  }

export default AdmissionsTests