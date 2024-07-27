// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Buttons

// Dark Theme Button
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

// Editor Mode Button
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

// Screenshot Button
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

// Menu Container
class menuContainer extends HTMLElement {
  connectedCallback() {
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

const menuContainerElement = document.createElement("menu-container");
if (document.querySelector("header") != null) {
  document.querySelector("header").appendChild(menuContainerElement);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Navigation Links

class HomeL extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
      <a href="https://firstsolar.github.io/docs/">Real&Mate Docs</a>
    `
  }
}
customElements.define("home-l", HomeL);

class APIRefL extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
      <a href="https://firstsolar.github.io/docs/api-reference">API Reference</a>
    `
  }
}
customElements.define("api-ref-l", APIRefL);

class NavLinksAPIRef extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
      <nav-links>
        <home-l></home-l> > <api-ref-l></api-ref-l>
      </nav-links>
    `
  }
}
customElements.define("nav-links-api-ref", NavLinksAPIRef);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Greetings
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

// Logo
class logoImg extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <img alt="Real&Mate Logo" title="Real&Mate Logo" name="real-and-mate-logo" id="logo" src="pics/logo-transparent.jpg" />
    `
  }
}
customElements.define("logo-img", logoImg);

console.log("elements-title.js is completed");
