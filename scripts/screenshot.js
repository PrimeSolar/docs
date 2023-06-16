const btns = document.getElementById('container-button');
const comment = document.getElementsByTagName("comment-tag");
const switchyBtn = document.getElementById('switchy');

function screenshot() {
  btns.style.display = "none";
  for (let x of comment) {
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
  btns.style.display = "block";
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
