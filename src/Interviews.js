import React, { Component } from 'react';
import './App.css';

import Collapsible from 'react-collapsible';

class Interviews extends Component {

    render(){
      var data = this.props.data

      console.log("Interviews data for collapsible:"+ data)
      return(
          <div id="Interviews">
        
      <Collapsible className="hubinfobox" closedClassName="hubinfobox" openedClassName="hubinfobox" trigger={this.props.url} triggerClassName="fullheight"triggerOpenedClassName="fullheight">

      <div className="collapsiblerow">
        <div className="displaydata">

        {data ? (
          data.map((value) => {
          return(<div>{value}</div>)
        })
        )
        : (<div>No data available!</div>)
        }

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