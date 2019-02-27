import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom';

import HubLinkBox from './HubLinkBox';
import AdmissionsTests from './AdmissionsTests';
import RelatedSubjects from './RelatedSubjects';
import CourseAdvice from './CourseAdvice';
import Interviews from './Interviews';


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
          var advice = []
          for (var i in dataSnapshot["CourseAdvice"]){
            advice.push(dataSnapshot["CourseAdvice"][i].text)
          }
          console.log("!!!COURSE ADVICE: ")
          console.log(advice)
            this.setState({ 
              data: dataSnapshot,
              related: dataSnapshot["RelatedSubjects"],
              interviews: dataSnapshot["Interviews"],
              advice: advice
            });
         });
  }

    render(){      
      const sections = [[["Admissions Tests", "some tests"], ["Related Subjects", this.state.related]], [["Course Advice",this.state.advice], ["Interviews",this.state.interviews]]];
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

      <div className="hubinfo">
        <div className="hubinfospaced">
         <AdmissionsTests data={sections[0][0][1]} url={sections[0][0][0]}/>
         </div> 
         <div className="hubinfospaced">
         <RelatedSubjects data={this.state.related} url={sections[0][1][0]}/>
         </div>
         <div className="hubinfospaced">
         <CourseAdvice data={this.state.advice} url={sections[1][0][0]}/>
         </div>
         <div className="hubinfospaced">
         <Interviews data={sections[1][1][1]} url={sections[1][1][0]}/>
         </div>
      </div>
    </div>
      )
    }
  }

export default HubCoursePage