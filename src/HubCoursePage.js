import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom';

import HubLinkBox from './HubLinkBox';
import HubInfoBox from './HubInfoBox';

import firebase from 'firebase';

class HubCoursePage extends Component {

    constructor(){
      super()
      this.state={
        data: []
      }
    }

    componentDidMount(){      
      const database = firebase.database();

      function writeData(reference, object){
        database.ref(reference).set(object);
      }
      function readData(reference){
        return database.ref(reference).once("value").then(function(snapshot){return snapshot.val();});
      }
      function writeUserData(userId, name, password, hair) {
        writeData('users/'+userId, {name: name, password: password, hair_colour: hair});
      }
      function readUserData(userId){
        return readData('users/'+userId);
      }
      function echoPromise(promise){
        promise.then(function(value){console.log("hi");console.log(value);});
      }
      readData("Uni/"+this.props.uni+"/Course/"+this.props.name)
        .then((dataSnapshot) => {
            this.setState({
              data: dataSnapshot,
              related: dataSnapshot["RelatedSubjects"],
              interviews: dataSnapshot["Interviews"],
              advice: dataSnapshot["CourseAdvice"]
            });
         });
  }

    render(){      
      const sections = [[["Admissions Tests", "some tests"], ["Related Subjects", this.state.related]], [["Course Advice",this.state.advice], ["Interviews",this.state.interviews]]];
      // for (var i in this.state.data) sections.push(this.state.data[i]);
      console.log(this.state)
      return(
        <div className="hubcoursepage fixscroll">
        <div className="hubrow">
        {/* <Link to="/the-hub">Go back</Link> */}

        <h1 className="hubcoursesubtitle">{this.props.uni} </h1> 
        <h1 className="hubcoursetitle">{this.props.name} </h1>
        <h2 className="linktocourse">LINK</h2>

        </div>


        <div className="hubrowspaced">
        {sections[0].map((value) => {  
              var url = value[0]   
              // Return the element  
              return (<HubLinkBox url={url}/> )})}  
        </div>

        <div className="hubrowspaced">

        {sections[1].map((value) => {  
                var url = value[0]   
                // Return the element  
                return (<HubLinkBox url={url}/> )})}
        </div>


         {sections[0].map((value) => { 
               return (
         <div className="hubinfospaced">
         <HubInfoBox data={value} url={value[0]}/>
         </div>
          )})}

          {sections[1].map((value) => {  
                return (
          <div className="hubinfospaced">
          <HubInfoBox data={value} url={value[0]}/>
          </div>
           )})}
      


        </div>
      )
    }
  }

export default HubCoursePage