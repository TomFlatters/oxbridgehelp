import React, { Component } from 'react';
import './App.css';

import Collapsible from 'react-collapsible';

class RelatedSubjects extends Component {

    render(){
      var data = this.props.data;
      console.log(this.props.data);
      console.log(typeof data);

      return(
          <div id="Related Subjects">
        
      <Collapsible className="hubinfobox" closedClassName="hubinfobox" openedClassName="hubinfobox" trigger={this.props.url} triggerClassName="fullheight"triggerOpenedClassName="fullheight">

      <div className="collapsiblerow">
        <div className="displaydata">
       {data}
        </div>
        <div className="datanav">
          
        </div>
      </div>
       
      </Collapsible>
          
        </div>
      )
    }
  }

export default RelatedSubjects