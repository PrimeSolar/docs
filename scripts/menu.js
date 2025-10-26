/*
 * The Library of Custom Reusable Web Elements
 * This file is the library containing my collection of custom, reusable web elements
 * that can be used across different parts of the project. These elements go beyond what browsers provide,
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
