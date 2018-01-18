var config = {
apiKey: "AIzaSyBawuQ2xPZica8Yl4y-lJ-TBLcqFoEsvP4",
authDomain: "train-times-a9676.firebaseapp.com",
databaseURL: "https://train-times-a9676.firebaseio.com",
projectId: "train-times-a9676",
storageBucket: "",
messagingSenderId: "167523479862"
};

firebase.initializeApp(config);

var database = firebase.database();


$("#addTrainButton").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var addTrain = $("#trainNameInput").val().trim();


  var newTrain = {
  	name: addTrain
  };

  database.ref().push(newTrain);
  console.log(newTrain.name);

  $("#trainNameInput").val("");


});

// ammend this code from class to fill in what you need to print your data on screen

// database.ref().on("child_added", function(childSnapshot, prevChildKey) {

//   console.log(childSnapshot.val());

//   // Store everything into a variable.
//   var empName = childSnapshot.val().name;
//   var empRole = childSnapshot.val().role;
//   var empStart = childSnapshot.val().start;
//   var empRate = childSnapshot.val().rate;

//   // Employee Info
//   console.log(empName);
//   console.log(empRole);
//   console.log(empStart);
//   console.log(empRate);

//   // Prettify the employee start
//   var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

//   // Calculate the months worked using hardcore math
//   // To calculate the months worked
//   var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
//   console.log(empMonths);

//   // Calculate the total billed rate
//   var empBilled = empMonths * empRate;
//   console.log(empBilled);

//   // Add each train's data into the table
//   $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
//   empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
// });


