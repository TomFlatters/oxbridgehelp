const firebase  = require("firebase");
const csvtojson = require("csvtojson");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAfnaiLlHra8674f4YJcSpjv46WbA8_oLE",
  authDomain: "test-586a7.firebaseapp.com",
  databaseURL: "https://test-586a7.firebaseio.com",
  projectId: "test-586a7",
  storageBucket: "",
  messagingSenderId: "227370208626"
};
firebase.initializeApp(config);

var database = firebase.database();

function writeData(reference, object){
	database.ref(reference).set(object);
}

var files = "CourseAdvice\nCourseLink\nGeneralResources\nInterviews\nSubjectResources\nTestAdvice\nTestResources".split("\n");
for(const file of files){
	csvtojson().fromFile("Data/"+file+".csv").then((jsonObj) => {
		writeData("/"+file, jsonObj);
	});
}

