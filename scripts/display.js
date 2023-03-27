const userRole = prompt("Please enter the role. Options:\nadmin (default)\nuser", "admin");
const subtitle = document.getElementById("subtitle");

function displayForAdmin() {
  subtitle.innerHTML = "for Administrators";
  let el = document.getElementsByClassName("no-admin");
  for (let x of el) {
    x.style.display = "none";
  }
  let elSection = document.getElementsByClassName("no-admin-section");
  for (let x of elSection) {
    x.closest("section").style.display = "none";
  }
  let elDetails = document.getElementsByClassName("no-admin-details");
  for (let x of elDetails) {
    x.closest("details").style.display = "none";
  }
}

function displayForUser() {
  subtitle.innerHTML = "for Users";
  let el = document.getElementsByClassName("no-user");
  for (let x of el) {
    x.style.display = "none";
  }
  let elSection = document.getElementsByClassName("no-user-section");
  for (let x of elSection) {
    x.closest("section").style.display = "none";
  }
  let elDetails = document.getElementsByClassName("no-user-details");
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
script[0].innerHTML = "";

console.log("display.js is completed");
