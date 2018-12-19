import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';


class Header extends Component{



render(){
    if (window.location.href){
        console.log(window.location.href.substr(window.location.href.lastIndexOf('/')));
        var urlCheck = window.location.href.substr(window.location.href.lastIndexOf('/'));
    }
    return(
        <div className="header">
           <div className="header-title">
             <Link 
              style={{ textDecoration: 'none',
              color: "black" }} 
               to="/">
                   OxbridgeHelp
               </Link>
           </div>
           <LinkTo check={urlCheck} name="Why apply?" link="/why-apply"/>
           <LinkTo check={urlCheck} name="How do I apply?" link="/how-to-apply"/>
            <Link to="/the-hub"><div className="thehubheader header-div"></div></Link>
           {/* <LinkTo check={urlCheck} name="The Hub" link="/the-hub"/> */}
        </div>
    )
}

}

export default Header;

const LinkTo = (props) => {
    return(

        <Link style={{ textDecoration: 'none',
        color: "#625f5e" }} 
        to={props.link}
       >

        <div className="header-div">
        {props.check === props.link ? 
            (<div id="selected-header">
                {props.name}
             </div>) 
             : 
             (<div>
                {props.name}
              </div>)
        }
        
        </div>

        </Link>
    )
}