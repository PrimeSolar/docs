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
