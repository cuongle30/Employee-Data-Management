// Initialize Firebase
var config = {
  apiKey: "AIzaSyDO2QLQc9LC0kAlVrxM_Qj-gl4DEnaIaQM",
  authDomain: "employee-data-management-b85ec.firebaseapp.com",
  databaseURL: "https://employee-data-management-b85ec.firebaseio.com",
  projectId: "employee-data-management-b85ec",
  storageBucket: "employee-data-management-b85ec.appspot.com",
  messagingSenderId: "459454541114"
};
firebase.initializeApp(config);

var database = firebase.database();

// Initial values
var name = "",
    role = "",
    startDate = "",
    currentMonth = new Date().getMonth()+1;
    monthlyRate = "",
    totalBilled = "";

document.querySelector("#submit").addEventListener("click", (event) => {
  event.preventDefault();
  // Grab values from text boxes
  name = document.querySelector("#employee-name").value.trim();
  role = document.querySelector("#role").value.trim();
  startDate = document.querySelector("#start-date").value.trim();
  monthlyRate = document.querySelector("#monthly-rate").value.trim();
  // monthsWorked = (currentMonth - startDate);
  // totalBilled =  monthsWorked * monthlyRate;

  // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    // totalBilled: totalBilled,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

  database.ref().on("child_added", (snapshot) => {
    var sv = snapshot.val();
    // Change the HTML to reflect
    document.querySelector("#name").innerText = sv.name;
    document.querySelector("#role").innerText = sv.role;
    document.querySelector("#start-date").innerText = sv.startDate;
    document.querySelector("#months-worked").innerText = sv.monthsWorked;
    document.querySelector("#monthly-rate").innerText = sv.monthlyRate;
    // document.querySelector("#total-billed").innerText = sv.totalBilled;
    // Handle the errors
  }, (errorObject) => {
    console.log(`Errors handled: ${errorObject.code}`);
  });
});
