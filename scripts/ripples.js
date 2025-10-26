/*
 * Script
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

const bttn = Array.from(document.querySelectorAll("button")).filter(
  (button) => !button.querySelector("i")
);
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
for (let btn of bttn) {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.setAttribute("id", "ripples");

    this.appendChild(ripples);

    const xSmall = window.matchMedia("(max-width: 570px)");
    const xMedium = window.matchMedia(
      "(min-width: 571px) and (max-width: 1280px)"
    );
    const xLarge = window.matchMedia("(min-width: 1281px)");

    function updateElement() {
      if (btn.closest("menu-container")) {
        console.log("menu");
        if (xSmall.matches) {
          // For max-width: 500px
          ripples.style.left = "calc(-89vw + " + x + "px)";
          ripples.style.top = -64 + y + "px";
        } else if (xMedium.matches) {
          // For min-width: 501px and max-width: 700px
          ripples.style.left = "calc(-94.5vw + " + x + "px)";
          ripples.style.top = -55 + y + "px";
        } else if (xLarge.matches) {
          // For min-width: 701px
          ripples.style.left = "calc(-96vw + " + x + "px)";
          ripples.style.top = -55 + y + "px";
        }
      } else {
        console.log("no-menu");
        if (xSmall.matches) {
          // For max-width: 500px
          ripples.style.left = "calc(-78.5vw + " + x + "px)";
          ripples.style.top = y + "px";
        } else if (xMedium.matches) {
          // For min-width: 501px and max-width: 700px
          ripples.style.left = "calc(-84.85vw + " + x + "px)";
          ripples.style.top = y + "px";
        } else if (xLarge.matches) {
          // For min-width: 701px
          ripples.style.left = "calc(-86.55vw + " + x + "px)";
          ripples.style.top = y + "px";
        }
      }
    }

    updateElement();

    window.addEventListener("resize", updateElement);

    setTimeout(() => {
      ripples.remove();
    }, 700);
  });
}
