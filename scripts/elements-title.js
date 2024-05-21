// Buttons

//Dark Theme Button
class themeButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="switchyContainerRelative">
      <div id="theme">Theme</div>
      <div id="switchyContainerAbsolute">
        <button id="switchy" onClick="switchyDarkTheme()" value="Theme">
          <i class="indicator"></i>
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

//Menu container
class menuContainer extends HTMLElement {
  connectedCallback(){
    this.innerHTML += `
    <div id="dropdown" class="dropdown">
      <div id="menu-container" onclick="menuToggle(this)">
        <div id="menu-title">Menu</div>
        <div id="menu-button">
          <div class="bar bar1"></div>
          <div class="bar bar2"></div>
          <div class="bar bar3"></div>
        </div>
      </div>
      <div id="container-button" class="dropdown-content">
        <theme-button></theme-button>
        <editor-button></editor-button>
        <screenshot-button></screenshot-button>
      </div>
    </div>
     `
  }
}
customElements.define("menu-container", menuContainer);

//Logo
class logoImg extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <img alt="Real&Mate Logo" id="logo" name="real-and-mate-logo" src="pics/logo-transparent.jpg" title="Real&Mate Logo"/>
    `
  }
}
customElements.define("logo-img", logoImg);

//Greetings
let headerIndex = document.getElementById("header-index");
if (headerIndex !== null) {
  let timeNow = new Date().getHours();
  let greetings = timeNow >= 0 && timeNow < 12 ?
    "Good Morning!" :
    timeNow >= 12 && timeNow < 18 ?
    "Good Afternoon!" :
    "Good Evening!";
  headerIndex.innerHTML = `<h1>${greetings}</h1>` + headerIndex.innerHTML;
}

console.log("elements-title.js is completed");
