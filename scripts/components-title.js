/**
 * The Library of Custom Reusable Web Components
 * This file is the library containing my collection of custom, reusable web components
 * that can be used across different parts of the project. These components go beyond what browsers provide,
 * allowing for expanded capabilities and functionality in the project.
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

/** Buttons. */

/** Dark theme button. */
class themeButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="switchyContainerRelative">
      <div id="theme">Theme</div>
      <div id="switchyContainerAbsolute">
        <button type="button" id="switchy" onClick="switchyDarkTheme()" value="Theme">
          <i class="indicator"></i>
        </button>
      </div>
    </div>
    `;
  }
}
customElements.define("theme-button", themeButton);

/** Editor mode button. */
class editorButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="toggleContainerRelative">
      <div id="edit-doc">Editor Mode</div>
      <div id="editorModeContainerAbsolute">
        <button type="button" id="editor-mode" onclick="editorMode()" value="Editor Mode">
          <i class="indicator"></i>
        </button>
      </div>
    </div>
    `;
  }
}
customElements.define("editor-button", editorButton);

/** Speak button. */
class speakButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="speakContainerRelative">
      <div id="speakContainerAbsolute">
        <button type="button" id="speakBtn" onclick="speak()">
          Read Page<br/>Out Loud
        </button>
      </div>
    </div>
    `;
  }
}
customElements.define("speak-button", speakButton);

/** Screenshot button. */
class screenshotButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="screenshotContainerRelative">
      <div id="screenshotContainerAbsolute">
        <button type="button" id="screenshotBtn">
          Download Page<br/>As Image
        </button>
      </div>
    </div>
    `;
  }
}
customElements.define("screenshot-button", screenshotButton);

/** HTML button. */
class htmlButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="downloadPageAsHTMLContainerRelative">
      <div id="downloadPageAsHTMLContainerAbsolute">
        <button type="button" id="downloadPageAsHTMLBtn">
          Download Page<br/>As HTML
        </button>
      </div>
    </div>
    `;
  }
}
customElements.define("html-button", htmlButton);

/** Menu container. */
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
        <speak-button></speak-button>
        <screenshot-button></screenshot-button>
        <html-button></html-button>
      </div>
    </div>
     `;
  }
}
customElements.define("menu-container", menuContainer);

const menuContainerComponent = document.createElement("menu-container");
if (!document.querySelector("#container>theme-button")) {
  document.querySelector("header").appendChild(menuContainerComponent);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Navigation links. */

class HomeL extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
      <a href="https://primesolar.github.io/docs/">Real&Mate Documentation</a>
    `;
  }
}
customElements.define("home-l", HomeL);

class APIRefL extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
      <a href="https://primesolar.github.io/docs/api-reference">API Reference</a>
    `;
  }
}
customElements.define("api-ref-l", APIRefL);

class NavLinksAPIRef extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
      <nav-links>
        <home-l></home-l> > <api-ref-l></api-ref-l>
      </nav-links>
    `;
  }
}
customElements.define("nav-links-api-ref", NavLinksAPIRef);

class NavLinksDocMainPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
      <nav-links>
        <home-l></home-l>
      </nav-links>
    `;
  }
}
customElements.define("nav-links-doc-main-page", NavLinksDocMainPage);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** The main page header with automatic greetings. */
let headerIndex = document.getElementById("header-index");
if (headerIndex !== null) {
  let timeNow = new Date().getHours();
  let greetings =
    timeNow >= 0 && timeNow < 12
      ? "Good Morning!"
      : timeNow >= 12 && timeNow < 18
      ? "Good Afternoon!"
      : "Good Evening!";
  headerIndex.innerHTML = `
    <h1 class="title">${greetings}</h1>
      <h1>
        <span class="title">
          Welcome to the Real<span id="amp">&</span>Mate Documentation!
        </span>
      </h1>
    <logo-img></logo-img>
  `;
}

/** Logo. */
class logoImg extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <img alt="The Real&Mate Company Logo" title="The Real&Mate Company Logo" name="the-real-and-mate-company-logo" id="logo" src="data:image/jpeg;base64,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"/>
    `;
  }
}
customElements.define("logo-img", logoImg);

console.log("components-title.js is completed");
