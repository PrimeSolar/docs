function editorMode() {
  if (document.documentElement.classList.contains("editor-mode-on")) {
    document.documentElement.classList.remove("editor-mode-on");
    document.documentElement.classList.add("editor-mode-off");
    document
      .getElementById("body")
      .attributes.removeNamedItem("contenteditable");
  } else {
    document.documentElement.classList.remove("editor-mode-off");
    document.documentElement.classList.add("editor-mode-on");
    document.getElementById("body").setAttribute("contenteditable", "true");
    if (document.documentElement.classList.contains("editor-mode-on-alerted")) {
    } else {
      alert(
        "Now you can edit this document in your browser.\nIMPORTANT: changes will not be saved on the server.\nYou may save edited document on your device as an HTML page for later usage."
      );
      document.documentElement.classList.add("editor-mode-on-alerted");
    }
  }
}

const constEditorMode = document.getElementById("editor-mode");
function moveIndicator() {
  constEditorMode.classList.toggle("editIsActive");
}
constEditorMode.addEventListener("click", moveIndicator, false);
