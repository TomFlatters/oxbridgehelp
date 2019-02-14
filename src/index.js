import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";

ReactDOM.render(<App />, document.getElementById('root'));

var config = {
    apiKey: "AIzaSyAfnaiLlHra8674f4YJcSpjv46WbA8_oLE",
    authDomain: "test-586a7.firebaseapp.com",
    databaseURL: "https://test-586a7.firebaseio.com",
    projectId: "test-586a7",
    storageBucket: "",
    messagingSenderId: "227370208626"
  };
if(firebase.apps.length < 1) firebase.initializeApp(config);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
