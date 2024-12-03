const containerButton = document.getElementById('container-button');
const dropdown = document.getElementById('dropdown');
const localReusableItems = document.getElementById("local-reusable-items");
const a = document.getElementsByTagName("a");
const button = document.getElementsByTagName("button");
const speakButtons = document.getElementsByClassName("speak-inline");
const comment = document.getElementsByTagName("comment-tag");
const noscript = document.getElementsByTagName("noscript");
const switchyBtn = document.getElementById('switchy');

function screenshot() {
  containerButton.style.display = "none";
  dropdown.style.display = "none";
  if (localReusableItems != null) {
    localReusableItems.style.display = "none";
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
    .then(canvas => {
      const url = canvas.toDataURL('image/jpg');
      const a = document.createElement('a');
      a.setAttribute('download', 'screenshot.jpg');
      a.setAttribute('href', url);
      a.click();
    })
  containerButton.style.display = null;
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

screenshotBtn.addEventListener('click', () => {
  if (document.documentElement.classList.contains("dark")) {
    themeScreenshot();
  } else if (document.documentElement.classList.contains("light")) {
    screenshot();
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themeScreenshot();
    } else {
      screenshot();
    }
  }
})

console.log("screenshot.js is completed");
