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
