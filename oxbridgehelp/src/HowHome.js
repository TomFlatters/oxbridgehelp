import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

class HowHome extends Component {


    render(){
      return(
        <div className="howhome">
            <div className="howhometitle center">
                The process:
            </div>
            <div className="howhomesubtitle">
            See <Link style={{
                textDecoration: 'none',
                color: 'black'
            }}
            to="/how-to-apply"><span className="linktext">'How do I apply?'</span></Link> for more information.
            </div>
            <div className="howrow">
                <HowColumn num="1" text="Submit your UCAS application at the start of the academic year."/>
                <HowColumn num="2" text="You may be asked to complete an exam, or submit written work for assessment."/>
                <HowColumn num="3" text="An invite to interview could mean a visit to Oxford/Cambridge, or a video interview depending on your location."/>
                <HowColumn num="4" text="You will be informed if an offer has been made or not around January."/>
            </div>
        </div>
      )
    }
  }

export default HowHome

const HowColumn = (props) => {
    const id = "iconnum"+ props.num;
return(
    <div className="howcolumn">
    <div className="howcolumnnum">
    <div id={id}></div>
    </div>
    <div className="howcolumntext">
      <div className="howtextstrong">{props.num}: </div> {props.text}
    </div>
    </div>
)
}