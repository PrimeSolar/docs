// Click tumbler to toggle .light and .dark classes.
// If class is not presented, determines actual condition based on the OS or web browser color scheme.
// If OS and web browser color scheme aren't supported, determines light condition.

const switchy = document.getElementById("switchy");

function moveIndicator() {
  switchy.classList.toggle("active");
}
switchy.addEventListener("click", moveIndicator, false);

let db;

const dexieScript = document.createElement("script");
dexieScript.type = "text/javascript";
dexieScript.src = "https://npmcdn.com/dexie@4.0.11/dist/dexie.min.js";
document
  .querySelector("body")
  .insertBefore(dexieScript, document.querySelector("body").firstChild);

dexieScript.onload = () => {
  db = new Dexie("Real&Mate Documentation");
  db.version(1).stores({ themeTable: "theme" });
  setTheme();
};

async function setTheme() {
  const themeTable = await db.themeTable.toArray();
  if (themeTable.length > 0) {
    const theme = themeTable[0].theme; // Get the first theme entry
    document.querySelector("html").classList.add(theme);
  }
}

function switchyDarkTheme() {
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    htmlElement.classList.add("light");
    for (let x of document.getElementsByClassName("card")) {
      x.classList.remove("card-dark-theme");
      x.classList.add("card-light-theme");
    }
  } else if (htmlElement.classList.contains("light")) {
    htmlElement.classList.remove("light");
    htmlElement.classList.add("dark");
    for (let x of document.getElementsByClassName("card")) {
      x.classList.remove("card-light-theme");
      x.classList.add("card-dark-theme");
    }
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      htmlElement.classList.add("light");
      for (let x of document.getElementsByClassName("card")) {
        x.classList.remove("card-dark-theme");
        x.classList.add("card-light-theme");
      }
    } else {
      htmlElement.classList.add("dark");
      for (let x of document.getElementsByClassName("card")) {
        x.classList.remove("card-light-theme");
        x.classList.add("card-dark-theme");
      }
    }
  }
  const currentTheme = htmlElement.classList[0];
  if (currentTheme) {
    db.themeTable.clear(); // Clear existing themes to avoid duplicates
    db.themeTable.add({ theme: currentTheme });
  } else {
    console.log("Theme is undefined");
  }
}

function updateCardThemes(removeClass, addClass) {
  for (let card of document.getElementsByClassName("card")) {
    card.classList.remove(removeClass);
    card.classList.add(addClass);
  }
}

/*const test = document.querySelector("theme-button").nextElementSibling.textContent.trim();
if ( test !== "Editor Mode") {
  document.querySelector("#theme").style.right = "-27px";
  document.querySelector("#switchyContainerAbsolute").style.right = "0";
} else {
  console.log("text content is Editor Mode");
}*/

function cssHoverEffect() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    for (let x of document.getElementsByClassName("card")) {
      x.classList.add("card-dark-theme");
    }
  } else {
    for (let x of document.getElementsByClassName("card")) {
      x.classList.add("card-light-theme");
    }
  }
}
cssHoverEffect();

console.log("dark-theme.js is completed");
