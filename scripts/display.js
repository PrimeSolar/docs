const userRole = prompt("Please enter the role. Options:\nadmin (default)\nuser", "admin");
const subtitle = document.getElementById("subtitle");

function displayForAdmin() {
  //Change subtitle:
  subtitle.innerHTML = "for Administrators";
  // Declare el, give it the value of array of elements with class "no-admin":
  let el = document.getElementsByClassName("no-admin");
  // Declare x, give it the value of el:
  for (let x of el) {
    x.style.display = "none";
  }
  // Declare elSection, give it the value of array of elements with class "no-admin-section":
  let elSection = document.getElementsByClassName("no-admin-section");
  // Declare x, give it the value of elSection:
  for (let x of elSection) {
    x.closest("section").style.display = "none";
  }
  // Declare elDetails, give it the value of array of elements with class "no-admin-details":
  let elDetails = document.getElementsByClassName("no-admin-details");
  // Declare x, give it the value of elDetails:
  for (let x of elDetails) {
    x.closest("details").style.display = "none";
  }
}

function displayForUser() {
  //Change subtitle:
  subtitle.innerHTML = "for Users";
  // Declare el, give it the value of array of elements with class "no-user":
  let el = document.getElementsByClassName("no-user");
  // Declare x, give it the value of el:
  for (let x of el) {
    x.style.display = "none";
  }
  // Declare elSection, give it the value of array of elements with class "no-user-section":
  let elSection = document.getElementsByClassName("no-user-section");
  // Declare x, give it the value of elSection:
  for (let x of elSection) {
    x.closest("section").style.display = "none";
  }
  // Declare elDetails, give it the value of array of elements with class "no-user-details":
  let elDetails = document.getElementsByClassName("no-user-details");
  // Declare x, give it the value of elDetails:
  for (let x of elDetails) {
    x.closest("details").style.display = "none";
  }
}

if (userRole == "user") {
  displayForUser()
} else {
  displayForAdmin()
}

const script = document.getElementsByTagName("script");
//Change script body:
script[0].innerHTML = "";

console.log("display.js is completed");
