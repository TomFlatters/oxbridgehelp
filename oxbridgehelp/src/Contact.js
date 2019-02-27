import React, { Component } from 'react';
import './App.css';

import { Logo } from "./Logo.png";

class Contact extends Component{

// the overlay class is incomplete, an animation or npm package should be installed such that the page loads more gradually
// maybe similarly to the initial header fadein animation?
// how can the "computer shell" theme be maintained? should it be? experiment with this?
// should the overlay class be copied for all non-home pages or should each be different??
// --> i think that the sites page should be considered in this regard more carefully - as it needs to display a lot of VISUAL information!??!?

render(){
    return(
        <div>
        <div className="focusbox">
            Contact Details: <br/>
            <a href="https://www.linkedin.com/in/tom-flatters-a04521160/" target="_blank">LinkedIn</a>
            <a href="mailto:tflats.tf@gmail.com" target="_blank">tflats.tf@gmail.com</a>
        </div>
        </div>
    )
}

}

export default Contact;