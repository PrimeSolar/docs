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

/** The Scroll to Top Button. */
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
  .querySelector("body")
  .appendChild(document.createElement("scroll-to-top-button"));

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

/** The table customization. */
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

/** The current date in the YYYY-MM-DD format. */

const getCurrentDate = () => {
  const today = new Date(); // Get the current date. */
  const year = today.getFullYear(); // Get the full year (YYYY). */
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Get the month (MM). */
  const day = String(today.getDate()).padStart(2, "0"); // Get the day (DD). */

  return `${year}-${month}-${day}`; // Format the date as YYYY-MM-DD. */
};

for (let currentDate of document.querySelectorAll("current-date")) {
  currentDate.textContent = getCurrentDate();
}

/** The W3C image web compoment. */
const w3cImage = document.querySelector("#w3c-img");
if (w3cImage) {
  /** Define the W3C image web component content. */
  w3cImage.innerHTML = `<img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAMAAABUFvrSAAABdFBMVEWyzeAAAACQl6BLS0wAWpxEhrawy94xea8IX5+Js9FBS1KsyNxjmsIebagVaKR1pckRZaJpnsQ8RkzA1ucpdazy9/o4frI1fLAlcqqbvtjG2uiCrs6BlKIAAACqxtp0hpJwgY0/SVAoLjOInaxoeIRYZW+pw9UPERNJVFscICNQXGUTFBWGmqg4QEbN3+yGsM9gb3kiJys7OzulvtALCwt7e3sybZkkKi4oKCg8gbNlZWU5dKFuf4srMjYxOD1bW1vn5+dKirmYvNchb6mBg4UTFhhbaXPU1NSbssJrg5fCwsIfW4dtocZEXW9alL9VYWsaHiG/v7+NorFHiLeVutVdlsCrq62ft8gjIyPT4+7s7Ox8j50zMzPY2NguNTocHBxNWGE1PUIHCAmhusujpaZra2zu9PhUVVWXl5fz8/N8qsyFsNDd6fINYqHp8fZVkb2jw9v1+PuYmJiZoaqJjpZZXmK20ONPT1C0tLTi7PP+/v7MzMxDs6PQAAAAAnRSTlP/AOW3MEoAAALRSURBVHja7ZVnUyJBEED73BYWliQKJgYFs5jD5ZyzOSeCioCkOw6k+fM3w7rC3qFYJ3y7V9VdPb1Vr7Zmt2eg1HCO7wmgRPUpwu0ZyP1qjvi4WeKf/8W1xBmrnYhMXSbinMqyVZAmir09KdFF9t/F52gjonZ0EyeDKnEiibHwwf5BLXH+VmLqwCmeHZjieQPTqWI32lx0zB4uzgUWdu+wx3bs5dmIGZ5teE7UJcrCXJbo8SJdI85Dvq64HTuJiohpoh7sIDKJNQXEo2xME+8FnUsfYbjf7ByKgMEzOhlcvUaMqIkpiSnqRnQQxdFOKQf2EMW2dX+FmYUPl4Mwzp49D0wYPGwsNLZUW/wFETVxGjM8jJgnI7aTBfHrKWWlarGHHUUAtiAwZgDFC2a2BTAMNRi4j4JLcQbTlLQqaC+Kt07bEDtddFYtHmJDIHCyEecEQD9//34v1OAJqqjiFCYBLS65oxu/E6fHgQp9rhYH2QwIvIN+xp4CeEJh5oS/MLSiijZ5bjQiUCvPGRK0oUU/eX1sVoH8PMwDDDAfRAz54ZGRG7yaeBoxmSUTIp6SALBLLwY/excMjcNCaNzP+sDnH/WxUc2nuNfVouLVxFOIr8QI4iMqo6B1V61iMVWszISWQ6swGJqdHPSCx/fg8H1EExsxadJ5K2Ky4uvyCJpofaO8FWsrqvlkpTIg+TxP+lrzyb1X3m+6082CxfII7vDKnso4MJN98VJ4wx/qjXQblrGvoUD+pD82wShy+xsilw1lFKNXOopGt9kZ1RMrbqwg7+X04mwvCeI8dtpsNkuWFwfRo/1N4pzDjRhaK15TYw/69JW30TeIRfUmoKFi7QsmE8248+KynGjOZTqdgDuIDQaooIC+/6f4oi6bLZycSD9aBGdqnSuvLutyn3f6TjSxFJWkQqFQHbwl4nItSZJZEjhF8CTWZrVrVrtaLQnVfln8G42XJ/NotlkfAAAAAElFTkSuQmCC"
  alt=" W3C" />`;
}

/** The "Best Practices" web component. */
const bestPractices = document.getElementsByTagName("best-practices");
if (bestPractices) {
  for (let x of bestPractices) {
    /** Define the "Best Practices" web component content. */
    x.innerHTML = `<strong>🙌 Best Practices</strong>` + x.innerHTML;
  }
}

/** The "Note" web component. */
const notes = document.getElementsByTagName("note");
if (notes) {
  for (let x of notes) {
    /** Define the "Note" web component content. */
    x.innerHTML =
      `<img alt="Note:" title="Note" name="note" class="img-inline" src="assets/note.jpg" />&nbsp;<strong>Note</strong>` +
      x.innerHTML;
  }
}

/** The footer. */
footerContainer = document.querySelector("#footerContainer");
const year = new Date().getFullYear();
function footerContainerF(e) {
  e &&
    /** Define the footer content. */
    (e.innerHTML += `<footer>
  <p id="copyright">Copyright © <a href="https://primesolar.github.io/web-developer/" class="link-primary" rel="noopener noreferrer">Vladislav Kazantsev</a> ${year}</p>
  <a type="button" href="https://www.buymeacoffee.com/CocaCola" id="bmc-button" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">☕ Buy me a coffee</a>
  <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-arrow" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">⬇</a>
  <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-link" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">coff.ee/CocaCola</a>
</footer>`);
}
footerContainerF(footerContainer);

/** The footer lower with more content. */
footerContainerLowerMC = document.querySelector("#footerContainerLowerMC");
function footerContainerLowerMCF(e) {
  e &&
    /** Define the footer content. */
    (e.innerHTML += `<footerLowerMC>
  <p id="copyright">Copyright © <a href="https://primesolar.github.io/web-developer/" class="link-primary" rel="noopener noreferrer">Vladislav Kazantsev</a> ${year}</p>
  <a type="button" href="https://www.buymeacoffee.com/CocaCola" id="bmc-button" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">☕ Buy me a coffee</a>
  <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-arrow" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">⬇</a>
  <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-link" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">coff.ee/CocaCola</a>
</footerLowerMC>`);
}
footerContainerLowerMCF(footerContainerLowerMC);

/** The footer lower with less Content. */
footerContainerLowerLC = document.querySelector("#footerContainerLowerLC");
function footerContainerLowerLCF(e) {
  e &&
    /** Define the footer content. */
    (e.innerHTML += `<footerLowerLC>
  <p id="copyright">Copyright © <a href="https://primesolar.github.io/web-developer/" class="link-primary" rel="noopener noreferrer">Vladislav Kazantsev</a> ${year}</p>
  <a type="button" href="https://www.buymeacoffee.com/CocaCola" id="bmc-button" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">☕ Buy me a coffee</a>
  <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-arrow" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">⬇</a>
  <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-link" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">coff.ee/CocaCola</a>
</footerLowerLC>`);
}
footerContainerLowerLCF(footerContainerLowerLC);

console.log("components.js is completed");
