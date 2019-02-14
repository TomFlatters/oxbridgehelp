import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';
import Home from './Home'
import {oXoptions, Camoptions} from './courselist.js'

import * as firebase from 'firebase'

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

var config = {
  apiKey: "AIzaSyAfnaiLlHra8674f4YJcSpjv46WbA8_oLE",
  authDomain: "test-586a7.firebaseapp.com",
  databaseURL: "https://test-586a7.firebaseio.com",
  projectId: "test-586a7",
  storageBucket: "",
  messagingSenderId: "227370208626"
};
if(firebase.apps.length < 1) {
  firebase.initializeApp(config);
}

const database = firebase.database();

function writeData(reference, object){
  database.ref(reference).set(object);
}

function readData(reference){
  return database.ref(reference).once("value").then(function(snapshot){return snapshot.val();});
}

class Hub extends Component {

componentDidUpdate(){

}


constructor(){
  super()
  this.state = {
    chosen: "",
    selected: false
  }
}

uniChoice = (data) => {
  this.setState({
   chosen: data,
   selected: true
  })
  console.log(this.state)
 }

courseChoice = (course) => {
  this.setState({
    course: course
  })
  document.getElementById("hubhomepage").classList = "hidden";
  document.getElementById("hubpages").classList = "";
}

render(){

      return(
        <div className="hub">
        
        <div id="hubhomepage">
        <div className="hubheader">
          <div className="header1"></div>
          <div className="header2"></div>
        </div>

        <div className="hubsearchcontainer">
        <div className="hubsearchposition">
        {!this.state.selected ? 
            (
              <ChooseUni click={this.uniChoice}/>
            ) 
             : 
            (
              <SearchCourses uni={this.state.chosen} click={this.courseChoice}/>
            )
        } 
        </div>
        </div>
        </div>

        <div className="hidden" id="hubpages">
      
        </div>

        </div>
      )
    }
  }

export default Hub


// first component to load
class ChooseUni extends Component {
  render(){
    return(
      <div className="chooseuni">      
        Where do you want to go?
      <div className="unichoice">
        <div className="unichoiceoption" onClick={() => {this.props.click("Oxford")}}>Oxford</div>
        <div className="unichoiceoption" onClick={() => {this.props.click("Cambridge")}}>Cambridge</div>
      </div>
      </div>
    )
  }
}




// second component to load
class SearchCourses extends Component {

  constructor(){
    super()
    
    this.state={
      selectedOption: "",
    }
    
  }


 
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  chooseoptions = (props) => {
    return this.state.courses;
  }

  render(){
    var uni = this.props.uni
    readData("Uni/"+uni+"/Course").then(function(courses){
      var course_list = []
      for(var course in courses) course_list.push(course)
      
      console.log("Course list is:")
      console.log(course_list);
      
      this.setState={
        selectedOption: this.state.selectedOption,
        courses: course_list
      }
    })
    
    const { selectedOption } = this.state;
    const optionUrl = "/the-hub/" + this.props.uni + "/" + selectedOption.value;
    console.log(selectedOption.value)
    console.log(optionUrl)
    console.log(this.state.courses)
    return(
      <div>
        Find courses and subjects at {this.props.uni}:
          {/* <div className="hubsearchbar"> */}
          <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.chooseoptions()}
        isSearchable
        className="searchbar"
      />
          {/* </div> */}
          <Link to={optionUrl}>
           <span className="searchinfo" onClick={() => {this.props.click(this.state.selectedOption)}}>Go</span>
          </Link>
      </div>
    )
  }
}

