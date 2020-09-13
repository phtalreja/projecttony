const functions = require('firebase-functions');


const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "pennapps2020-1df2f.firebaseapp.com",
    databaseURL: "https://pennapps2020-1df2f.firebaseio.com",
    projectId: "pennapps2020-1df2f",
    storageBucket: "pennapps2020-1df2f.appspot.com",
    messagingSenderId: "976023894018",
    appId: "1:976023894018:web:b31fb21eb79ceb97f20f1b"
  };
  firebase.initializeApp(firebaseConfig);
  // Initialize Cloud Functions through Firebase
function onsubmit(){ 
    var display = document.getElementById("result").innerText;
    var query = document.getElementById("query").value;
    var geocode = document.getElementById("geocode").value;
    var opinionAnalysis = firebase.functions().httpsCallable('opinionAnalysis');
    opinionAnalysis({query:query, geocode:geocode}).then(function(result) {
    console.log(result);
})
    .catch(error => {  });
