// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Footer
footerContainer = document.querySelector("#footerContainer");

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define footer content:
    footerContainer.innerHTML += `
<footer>
Copyright © <a href="https://firstsolar.github.io/web-developer/">Vladislav Kazantsev</a> 2024
</footer>
      `
  }
}
footerContainerF(footerContainer);

// Footer lower with more content
footerContainerLowerMC = document.querySelector("#footerContainerLowerMC");

function footerContainerLowerMCF(footerContainerLowerMC) {
  if (footerContainerLowerMC != null) {
    // Define footer content:
    footerContainerLowerMC.innerHTML += `
<footerLowerMC>
Copyright © <a href="https://firstsolar.github.io/web-developer/">Vladislav Kazantsev</a> 2024
</footerLowerMC>
      `
  }
}
footerContainerLowerMCF(footerContainerLowerMC);

// Footer lower with less content
footerContainerLowerLC = document.querySelector("#footerContainerLowerLC");

function footerContainerLowerLCF(footerContainerLowerLC) {
  if (footerContainerLowerLC != null) {
    // Define footer content:
    footerContainerLowerLC.innerHTML += `
<footerLowerLC>
Copyright © <a href="https://firstsolar.github.io/web-developer/">Vladislav Kazantsev</a> 2024
</footerLowerLC>
      `
  }
}
footerContainerLowerLCF(footerContainerLowerLC);

// Scroll to Top Button
class scrollToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="#" class="to-top">
      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    `
  }
}
customElements.define("scroll-to-top-button", scrollToTop);

const scrollToTopButton = document.createElement("scroll-to-top-button");
document.querySelector("main").appendChild(scrollToTopButton);

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// Table Customization
const tableLinks = document.querySelectorAll("table a");
for (let x of tableLinks) {
  x.style.textDecoration = "underline";
}

const tables = document.getElementsByTagName("table");
if (tables != null) {
  for (let x of tables) {
    let rows = x.rows;
    for (let x of rows) {
      x.cells[0].style.textAlign = "center";
      x.cells[0].style.fontWeight = "bold";
    }
  }
}

console.log("elements.js is completed");
