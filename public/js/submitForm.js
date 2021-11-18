/*// Initialize Firebase
var config = {
  apiKey: "AIzaSyD9KgCmYqzlHKD3YRDN4raaNUC5gCq8-V0",
  authDomain: "denzel-music.firebaseapp.com",
  databaseURL: "https://denzel-music-default-rtdb.firebaseio.com",
  projectId: "denzel-music",
  storageBucket: "denzel-music.appspot.com",
  messagingSenderId: "97686556239",
  appId: "1:97686556239:web:3ab7ee2979d1944dd1e43a",
  measurementId: "G-TJS27MC7FG"
}; 
firebase.initializeApp(config);
*/
//Lisen for a submit
/*document.querySelector(".contact2-form").addEventListener("submit", submitForm);

//Reference contact info collections
let contactInfo = firebase.database().ref("infos");

function submitForm(){
    var form = document.getElementsByClassName(".contact2-form");
    form.reset();
} */

/*//Get input values
function submitForm(){
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, message);
} */

//Save info to firebase
/*function saveContactInfo(name, email, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name : name,
        email :  email,
        message : message
    })
} */

function clearForm(){
    alert("working");
}