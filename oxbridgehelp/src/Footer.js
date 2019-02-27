import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';


class Footer extends Component{
render(){
    return(
        <div className="footer">
           <div className="footercol">
           <li className="footerlink">Why apply?</li>
           <li className="footerlink">How to apply</li>
           <li className="footerlink">TheHub</li>           
           <li className="footerlink">Home</li>
           </div>
           <div className="footercol">
           <li className="footerlink">ProjectAccess</li>           
           <li className="footerlink">Terms + Conditions</li>           
           <li className="footerlink">Privacy Policy</li>           
           </div>
           <div className="footercol">
           <li className="footerlink">Get in touch</li>
           <li className="footerlink">Oxford, England</li>           
           </div>
        </div>
    )
}

}

export default Footer;

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