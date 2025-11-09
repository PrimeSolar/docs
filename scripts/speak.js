/**
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

function speak() {
  const speak = document.getElementsByClassName("speak");
  for (let x of speak) {
    console.log(x.childNodes);
    if (x.tagName == "H1") {
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          x.textContent
            .replace(/Read Out Loud/g, "")
            .replace(/^\s*Copy\s*$/gm, "")
            .trim()
        )
      );
    } else if (x.tagName == "H2") {
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          x.parentElement.textContent
            .replace(/Read Out Loud/g, "")
            .replace(/^\s*Copy\s*$/gm, "")
            .trim()
        )
      );
    } else if (x.tagName == "P") {
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          x.textContent.replace(/Read Out Loud/g, "").trim()
        )
      );
    } else if (x.tagName == "TR") {
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          x.parentElement.parentElement.textContent
            .replace(/^\s*Read Out Loud\s*$/gm, "")
            .trim()
        )
      );
    } else {
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(x.childNodes[1].textContent.trim())
      );
    }
  }
}

function speakInline(button) {
  console.log("speakInline function called");
  if (
    this.parentElement.tagName == "H2" ||
    this.parentElement.tagName == "H3"
  ) {
    window.speechSynthesis.speak(
      new SpeechSynthesisUtterance(
        this.parentElement.parentElement.textContent
          .replace(/Read Out Loud/g, "")
          .replace(/^\s*Copy\s*$/gm, "")
          .trim()
      )
    );
  } else if (this.parentElement.tagName == "P") {
    window.speechSynthesis.speak(
      new SpeechSynthesisUtterance(
        this.parentElement.textContent.replace(/Read Out Loud/g, "").trim()
      )
    );
  } else if (this.parentElement.tagName == "DIV") {
    window.speechSynthesis.speak(
      new SpeechSynthesisUtterance(
        this.parentElement.textContent
          .replace(/^\s*Read Out Loud\s*$/gm, "")
          .trim()
      )
    );
  } else {
    window.speechSynthesis.speak(
      new SpeechSynthesisUtterance(
        this.parentElement.childNodes[0].textContent.trim()
      )
    );
  }
}

for (let x of document.getElementsByClassName("speak-inline")) {
  x.addEventListener("click", speakInline);
  x.title = "Read Out Loud";
}

for (let x of document.getElementsByClassName("speak")) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); /** Create speaker button svg element. */
  svg.setAttribute("width", "12"); /** Set svg width. */
  svg.setAttribute("height", "10"); /** Set svg height. */
  svg.setAttribute("fill", "#0075ff"); /** Set svg color. */
  svg.setAttribute("viewBox", "8 4 4 10"); /** Set svg viewing area. */
  svg.setAttribute("class", "speak-inline");
  svg.addEventListener("click", speakInline);
  console.log("Event listener added to SVG");

  const title = document.createElementNS("http://www.w3.org/2000/svg", "title"); /** Create title element. */
  title.textContent = "Read Out Loud"; /** Set title text. */
  svg.appendChild(title); /** Append title element. */

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path"); /** Create path element for svg. */
  path.setAttribute(
    "d",
    "M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"
  );

  svg.appendChild(path);
  x.appendChild(svg);
}
