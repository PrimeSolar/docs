function menuToggle(x) {
  x.classList.toggle("change");
  document.getElementById("container-button").classList.toggle("show");
}
window.onclick = function (event) {
  if (
    !event.target.matches("#menu-title") &&
    !event.target.matches("#menu-button") &&
    !event.target.matches(".bar") &&
    !event.target.matches(".dropdown-content") &&
    !event.target.matches("#switchyContainerAbsolute") &&
    !event.target.matches("#theme") &&
    !event.target.matches("#switchy") &&
    !event.target.matches(".indicator") &&
    !event.target.matches("#editorModeContainerAbsolute") &&
    !event.target.matches("#edit-doc") &&
    !event.target.matches("#editor-mode") &&
    !event.target.matches("#screenshotBtn")
  ) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i of dropdowns) {
      if (i.classList.contains("show")) {
        i.classList.remove("show");
      }
      const menuButton = document.getElementById("menu-container");
      if (menuButton.classList.contains("change")) {
        menuButton.classList.remove("change");
      }
    }
  }
};
