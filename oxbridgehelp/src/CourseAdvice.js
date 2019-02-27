import React, { Component } from 'react';
import './App.css';

import Collapsible from 'react-collapsible';

class CourseAdvice extends Component {
  // constructor(){
  //   super()
  //   this.returnData = this.returnData.bind(this);
  // }

    // returnData() {
    //  var data = this.props.data
    //  if(data){
    //   data.forEach(element => {
    //     console.log("element: " + element)
    //     return({element})
    //   })
    // }
    // else{
    //   return (<div>No responses available!</div>)
    // }
    // }

    render(){
      var data = this.props.data
      console.log("course advice data: " + data)
      return(
          <div>
        
      <Collapsible className="hubinfobox" closedClassName="hubinfobox" openedClassName="hubinfobox" trigger={this.props.url} triggerClassName="fullheight"triggerOpenedClassName="fullheight">

      <div className="collapsiblerow">
        <div className="displaydata">
        {data ? (
          data.map((value) => {
          return(<div>{value}</div>)
        })
        )
        : (<div>No data available!</div>)
        }
        </div>
        <div className="datanav">
        </div>
      </div>
       
      </Collapsible>
          
        </div>
      )
    }
  }

export default CourseAdvice