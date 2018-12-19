import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router} from 'react-router-dom';

import Hub from './Hub'
import Home from './Home'
// import Sites from './Sites'
import About from './About'
import Header from './Header'

class App extends Component {  
  

  render() {
    return (
      <Router>

  
     <div>
     <Header />
        <div className="background" id="home_bg">
            <Route exact path="/" component={Home} />
            <Route path="/the-hub" component={Hub} />
            {/* <Route path="/sites" component={Sites} /> */}
            <Route path="/about" component={About} />
        </div>

     </div>

    </Router>


    );
  }
} 

export default App;