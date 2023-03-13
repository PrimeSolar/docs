var userRole = prompt("Please enter the role. Options:\nuser (default)\nadmin", "user");
var subtitle = document.getElementById("subtitle");

function displayForAdmin() {
  subtitle.innerHTML = "for Administrators";
  var el = document.getElementsByClassName("no-admin");
  for (x = 0; x < el.length; x++) {
    el[x].closest("section").style.display = "none";
  }
  var el2 = document.getElementsByClassName("no-admin-details");
  for (y = 0; y < el2.length; y++) {
    el2[y].closest("details").style.display = "none";
  }
}

function displayForUser() {
  subtitle.innerHTML = "for Users";
  var el = document.getElementsByClassName("no-user-section");
  for (x = 0; x < el.length; x++) {
    el[x].closest("section").style.display = "none";
  }
  var el2 = document.getElementsByClassName("no-user-details");
  for (y = 0; y < el2.length; y++) {
    el2[y].closest("details").style.display = "none";
  }
}

if (userRole == "admin") {
  displayForAdmin()
} else {
  displayForUser()
}

var script = document.getElementsByTagName("script");
script[0].innerHTML = "";
