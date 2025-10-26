/*
 * Display Functionality Script
 *
 * This script prompts the user to enter their role
 * and dynamically adjusts the webpage content based on a role.
 *
 * It changes the subtitle and hides specific elements that are
 * not relevant to a user's role. Elements can be identified
 * by their respective classes.
 *
 * The script ensures that all unneeded sections and details
 * are hidden accordingly.
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

const userRole = prompt(
  "Please enter the role. Options:\nadmin (default)\nuser",
  "admin"
);
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
  displayForUser();
} else {
  displayForAdmin();
}

const script = document.getElementsByTagName("script");
//Change script body:
script[0].innerHTML = "";

console.log("display.js is completed");
