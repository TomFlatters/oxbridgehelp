import React, { Component } from 'react';
import './App.css';

class HubLinkBox extends Component {

    render(){
      return(
        <div className="hublinkbox">
            {this.props.url}
        </div>
      )
    }
  }

export default HubLinkBox