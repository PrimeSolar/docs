/**
 * Script
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

const html2CanvasScript = document.createElement("script");
html2CanvasScript.type = "text/javascript";
html2CanvasScript.src =
  "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.querySelector("body").appendChild(html2CanvasScript);

const containerButton = document.getElementById("container-button");
const dropdown = document.getElementById("dropdown");
const titleClass = document.querySelectorAll(".title");
const logoContainer = document.querySelector("logo-img");
const localReusableItems = document.getElementById("local-reusable-items");
const a = document.getElementsByTagName("a");
const button = document.getElementsByTagName("button");
const speakButtons = document.getElementsByClassName("speak-inline");
const comment = document.getElementsByTagName("comment-tag");
const noscript = document.getElementsByTagName("noscript");
const switchyBtn = document.getElementById("switchy");

function screenshot() {
  containerButton.style.display = "none";
  dropdown.style.display = "none";
  if (localReusableItems != null) {
    localReusableItems.style.display = "none";
  }
  if (logoContainer) {
    logoContainer.style.animation = "none";
  }
  for (let x of titleClass) {
    x.style.background = "none";
    x.style.backgroundClip = "none";
    x.style.webkitTextFillColor = "none";
    x.style.animation = "none";
    x.style.color = "#007fff";
  }
  for (let x of a) {
    x.style.textDecoration = "none";
  }
  for (let x of button) {
    x.style.display = "none";
  }
  for (let x of speakButtons) {
    x.style.display = "none";
  }
  for (let x of comment) {
    x.style.display = "none";
  }
  for (let x of noscript) {
    x.style.display = "none";
  }
  html2canvas(document.body)
    .then((canvas) => {
      const dataURL = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.setAttribute("download", "screenshot.jpg");
      link.setAttribute("href", dataURL);
      link.click();
    })
    .catch((error) => {
      console.error("Error capturing screenshot:", error);
    });
  containerButton.style.display = null;
  for (let x of titleClass) {
    x.style.background = "linear-gradient(to right, #007fff, #5597ff)";
    x.style.backgroundClip = "text";
    x.style.webkitTextFillColor = "transparent";
    x.style.animation = "brighten 1s";
    x.style.color = "none";
  }
  dropdown.style.display = null;
  for (let x of a) {
    x.style.textDecoration = "underline";
  }
  for (let x of button) {
    x.style.display = "block";
  }
  for (let x of speakButtons) {
    x.style.display = "inline-block";
  }
  for (let x of comment) {
    x.style.display = "inline";
  }
}

function themeScreenshot() {
  switchyBtn.click();
  screenshot();
  switchyBtn.click();
}

screenshotBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    themeScreenshot();
  } else if (document.documentElement.classList.contains("light")) {
    screenshot();
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      themeScreenshot();
    } else {
      screenshot();
    }
  }
});

console.log("screenshot.js is completed");
