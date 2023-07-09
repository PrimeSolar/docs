if (navigator.userAgent.indexOf('Safari') != -1) { //Safari
  //Permit
} else if (navigator.userAgent.indexOf('Chrome') != -1) { //Chrome
  //Permit
} else {
  //Replace document content with a phrase asking to change the browser:
  document.body.innerHTML = "<style>body {text-align: center; font-size: 25px;} div {padding-top: 25%;}</style><div>The browser is not supported. Please open this page in another browser.</div>";
}

console.log("check-browser.js is completed");
