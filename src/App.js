import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router} from 'react-router-dom';

import Hub from './Hub'
import Home from './Home'
// import Sites from './Sites'
import Header from './Header'
import HubCoursePage from './HubCoursePage'

import {oXoptions, Camoptions} from './courselist'

class App extends Component {
  

  render() {
    return (
      <Router>

  
     <div>
     <Header />
        <div className="background" id="home_bg">
            <Route exact path="/" component={Home} />
            <Route exact path="/the-hub" component={Hub} />
            {/* <Route path="/sites" component={Sites} /> */}

            {oXoptions.map((value) => {
              var url = "/the-hub/" + "Oxford/" + value.value
              // Return the element
              return (<Route exact path={url} component={() => (
              <HubCoursePage uni="Oxford" value={value.value} name={value.label}/>
              )} />)
            })}

            {Camoptions.map((value) => {
              var url = "/the-hub/" + "Cambridge/" + value.value
              // Return the element
              return (<Route exact path={url} component={() => (
              <HubCoursePage uni="Cambridge" value={value.value} name={value.label}/>
              )} />)
            })}

        </div>

     </div>

    </Router>

    );
  }
}

export default App;
