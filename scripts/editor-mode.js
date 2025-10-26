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

function editorMode() {
  const body = document.querySelector("body");
  body.classList.contains("editor-mode-on")
    ? (body.classList.remove("editor-mode-on"),
      body.classList.add("editor-mode-off"),
      body.attributes.removeNamedItem("contenteditable"))
    : (body.classList.remove("editor-mode-off"),
      body.classList.add("editor-mode-on"),
      body.setAttribute("contenteditable", "true"),
      body.classList.contains("editor-mode-on-alerted") ||
        (alert(
          "Now you can edit this document in your browser.\nIMPORTANT: changes will not be saved on the server.\nYou may save edited document on your device as an HTML page for later usage."
        ),
        body.classList.add("editor-mode-on-alerted")));
}

const editorModeButton = document.getElementById("editor-mode");
function moveIndicator() {
  editorModeButton.classList.toggle("editIsActive");
}
editorModeButton.addEventListener("click", moveIndicator, !1);
