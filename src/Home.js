import React, { Component } from 'react';
import './App.css';

import Main from './Main.js'
import WhyHome from './WhyHome.js'
import HowHome from './HowHome.js'
import HubHome from './HubHome.js'

import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
<div className="fixscroll">

      <Main />
      <WhyHome />
      <HowHome />
      <HubHome />

</div>
    );
  }
}

export default Home;
