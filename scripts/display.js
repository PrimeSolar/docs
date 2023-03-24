var userRole = prompt("Please enter the role. Options:\nadmin (default)\nuser", "admin");
var subtitle = document.getElementById("subtitle");

function displayForAdmin() {
  subtitle.innerHTML = "for Administrators";
  var el = document.getElementsByClassName("no-admin");
  for (let x = 0; x < el.length; x++) {
    el[x].style.display = "none";
  }
  var elSection = document.getElementsByClassName("no-admin-section");
  for (let x = 0; x < elSection.length; x++) {
    elSection[x].closest("section").style.display = "none";
  }
  var elDetails = document.getElementsByClassName("no-admin-details");
  for (let x = 0; x < elDetails.length; x++) {
    elDetails[x].closest("details").style.display = "none";
  }
}

function displayForUser() {
  subtitle.innerHTML = "for Users";
  var el = document.getElementsByClassName("no-user");
  for (let x = 0; x < el.length; x++) {
    el[x].style.display = "none";
  }
  var elSection = document.getElementsByClassName("no-user-section");
  for (let x = 0; x < elSection.length; x++) {
    elSection[x].closest("section").style.display = "none";
  }
  var elDetails = document.getElementsByClassName("no-user-details");
  for (let x = 0; x < elDetails.length; x++) {
    elDetails[x].closest("details").style.display = "none";
  }
}

if (userRole == "user") {
  displayForUser()
} else {
  displayForAdmin()
}

var script = document.getElementsByTagName("script");
script[0].innerHTML = "";
