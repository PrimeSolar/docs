const html2CanvasScript = document.createElement("script");
html2CanvasScript.type = "text/javascript";
html2CanvasScript.src =
  "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.querySelector("body").appendChild(html2CanvasScript);

const containerButton = document.getElementById("container-button");
const dropdown = document.getElementById("dropdown");
const titleClass = document.querySelectorAll(".title");
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
  html2canvas(document.body).then((canvas) => {
    const url = canvas.toDataURL("image/jpg");
    const a = document.createElement("a");
    a.setAttribute("download", "screenshot.jpg");
    a.setAttribute("href", url);
    a.click();
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
