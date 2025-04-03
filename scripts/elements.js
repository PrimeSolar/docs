// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Scroll to Top Button
class scrollToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="#" class="to-top" aria-label="Scroll to top" title="Scroll to top">
      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11.5" fill="none" stroke="#fff" stroke-width="1"/>
        <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    `;
  }
}
customElements.define("scroll-to-top-button", scrollToTop);

document
  .querySelector("main")
  .appendChild(document.createElement("scroll-to-top-button"));

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Table Customization
const tableLinks = document.querySelectorAll("table a");
for (let x of tableLinks) {
  x.style.textDecoration = "underline";
}

const tables = document.getElementsByTagName("table");
if (tables.length > 0) {
  for (let x of tables) {
    let rows = x.rows;
    for (let y of rows) {
      if (y.cells.length > 0) {
        y.cells[0].style.textAlign = "center";
        y.cells[0].style.fontWeight = "bold";
      }
    }
  }
}

// Best Practices
const bestPractices = document.getElementsByTagName("best-practices");
if (bestPractices) {
  for (let x of bestPractices) {
    x.innerHTML = "<strong>🙌 Best Practices</strong>" + x.innerHTML;
  }
}

// Note
const notes = document.getElementsByTagName("note");
if (notes) {
  for (let x of notes) {
    x.innerHTML =
      '<img alt="Note:" title="Note" name="note" class="img-inline" src="assets/note.jpg" />&nbsp;<strong>Note</strong>' +
      x.innerHTML;
  }
}

// Footer
footerContainer = document.querySelector("#footerContainer");
const year = new Date().getFullYear();
function footerContainerF(e) {
  e &&
    (e.innerHTML += `<footer>Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</footer>`);
}
footerContainerF(footerContainer);

// Footer lower with more content
footerContainerLowerMC = document.querySelector("#footerContainerLowerMC");
function footerContainerLowerMCF(e) {
  e &&
    (e.innerHTML += `<footerLowerMC>Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</footerLowerMC>`);
}
footerContainerLowerMCF(footerContainerLowerMC);

// Footer lower with less content
footerContainerLowerLC = document.querySelector("#footerContainerLowerLC");
function footerContainerLowerLCF(e) {
  e &&
    (e.innerHTML += `<footerLowerLC>Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</footerLowerLC>`);
}
footerContainerLowerLCF(footerContainerLowerLC);

console.log("elements.js is completed");
