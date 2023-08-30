// Buttons

//Dark Theme Button
class themeButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="switchyContainerRelative">
      <div id="theme">Theme</div>
      <div id="switchyContainerAbsolute">
        <button id="switchy" onClick="switchyDarkTheme()" value="Theme">
          <i class="indicator"/>
        </button>
      </div>
    </div>
    `
  }
}
customElements.define("theme-button", themeButton);

//Editor Mode Button
class editorButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="toggleContainerRelative">
      <div id="edit-doc">Editor Mode</div>
      <div id="editorModeContainerAbsolute">
        <button id="editor-mode" onclick="editorMode()" value="Editor Mode">
          <i class="indicator"></i>
        </button>
      </div>
    </div>
    `
  }
}
customElements.define("editor-button", editorButton);

//Screenshot Button
class screenshotButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="screenshotContainerRelative">
      <div id="screenshotContainerAbsolute">
        <button id="screenshotBtn">
          Download Page<br/>As Image
        </button>
      </div>
    </div>
    `
  }
}
customElements.define("screenshot-button", screenshotButton);

//Greetings
let container = document.getElementById("header-index");
if (container !== null) {
  let timeNow = new Date().getHours();
  let greetings = timeNow >= 0 && timeNow < 12 ?
    "Good Morning!" :
    timeNow >= 12 && timeNow < 18 ?
    "Good Afternoon!" :
    "Good Evening!";
  container.innerHTML = `<h1>${greetings}</h1>` + container.innerHTML;
}

//Logo
const logo = document.getElementById("logo");
if (logo !== null) {
  logo.alt = "Real&Mate Logo";
  logo.name = "real-and-mate-logo";
  logo.src = "pics/logo-transparent.jpg";
  logo.title = "Real&Mate Logo";
  logo.classList.add("center", "no-shadow");
}

console.log("elements-title.js is completed");
