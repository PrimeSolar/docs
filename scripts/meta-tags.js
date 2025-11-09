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

/** Set the <html> element `lang` property. */
const html = document.querySelector("html");
html.lang = "en";

/** Set `dir="ltr"` for the <html> element. */
html.dir = "ltr";

/** Set <meta name="viewport" content="width=device-width, initial-scale=1" />. */
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
document.querySelector("head").appendChild(metaViewport);

/** Set `title` for the <html> element based on a webpage's content. */
const title = document.querySelector(".title");
if (
  title &&
  title.innerHTML !==
    'Welcome to the Real<span id="amp">&amp;</span>Mate Documentation!'
) {
  document.title =
    title.textContent.replace(/Read Out Loud/g, "").trim() +
    " | Real&Mate Documentation";
} else {
  document.title = "Real&Mate Documentation";
}

/** Insert <meta name="author" content="Vladislav Kazantsev">. */
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
document.querySelector("head").appendChild(metaAuthor);

/** Insert <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">. */
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
document.querySelector("head").appendChild(metaCopyright);

/** Insert <link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">. */
const linkNormalize = document.createElement("link");
linkNormalize.rel = "stylesheet";
linkNormalize.type = "text/css";
linkNormalize.href =
  "https://necolas.github.io/normalize.css/8.0.1/normalize.css";
document.querySelector("head").appendChild(linkNormalize);

/** Insert "azure.css". */
const linkAzure = document.createElement("link");
linkAzure.rel = "stylesheet";
linkAzure.type = "text/css";
if (
  window.location.href.indexOf("mgmt") !== -1 ||
  window.location.href.indexOf("log") !== -1
) {
  linkAzure.href = "../../../styles/azure.css";
} else if (window.location.href.indexOf("/api-ref/") !== -1) {
  linkAzure.href = "../../styles/azure.css";
} else if (window.location.href.indexOf("/pages/") !== -1) {
  linkAzure.href = "../styles/azure.css";
} else {
  linkAzure.href = "styles/azure.css";
}
document.querySelector("head").appendChild(linkAzure);
linkAzure.onload = function () {
  /** Show the body after the CSS is loaded. */
  document.body.style.display = "block";
};
linkAzure.onerror = function () {
  console.error("Failed to load azure.css");
  /** Show an informational message. */
  document.body.insertAdjacentHTML(
    "afterbegin",
    "<p>Error loading styles. Please try again later.</p>"
  );
  document.body.style.display = "block"; /** Show the body even if CSS fails. */
};

/** Insert <link rel="icon" href="assets/logos/logo-tab.jpg">. */
const linkImage = document.createElement("link");
linkImage.rel = "icon";
if (
  window.location.href.indexOf("mgmt") !== -1 ||
  window.location.href.indexOf("log") !== -1
) {
  linkImage.href = "../../../assets/logos/logo-tab.jpg";
} else if (window.location.href.indexOf("/api-ref/") !== -1) {
  linkImage.href = "../../assets/logos/logo-tab.jpg";
} else if (window.location.href.indexOf("/pages/") !== -1) {
  linkImage.href = "../assets/logos/logo-tab.jpg";
} else {
  linkImage.href = "assets/logos/logo-tab.jpg";
}
document.querySelector("head").appendChild(linkImage);

/** Set `type="text/javascript"` for all <script> elements for better compatibility. */
for (let x of document.querySelectorAll("script")) {
  x.type = "text/javascript";
}

/** Insert <meta http-equiv="Pragma" content="no-cache">
var metaPragma = document.createElement("meta");
metaPragma.httpEquiv = "Pragma";
metaPragma.content = "no-cache";
document.querySelector("head").appendChild(metaPragma);. */
