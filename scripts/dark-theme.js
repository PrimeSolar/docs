// click tumbler to toggle .light and .dark classes
// if class is not presented, determines actual condition based on the OS or web browser color scheme
// if OS and web browser color scheme aren't supported, determines light condition

const switchy = document.getElementById('switchy');

function moveIndicator() {
  switchy.classList.toggle('active');
}
switchy.addEventListener("click", moveIndicator, false);

function switchyDarkTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    for (let x of document.getElementsByClassName("card")) {
      x.classList.remove("card-dark-theme");
      x.classList.add("card-light-theme");
    }
  } else if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    for (let x of document.getElementsByClassName("card")) {
      x.classList.remove("card-light-theme");
      x.classList.add("card-dark-theme");
    }
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("light")
      for (let x of document.getElementsByClassName("card")) {
        x.classList.remove("card-dark-theme");
        x.classList.add("card-light-theme");
      }
    } else {
      document.documentElement.classList.add("dark")
      for (let x of document.getElementsByClassName("card")) {
        x.classList.remove("card-light-theme");
        x.classList.add("card-dark-theme");
      }
    }
  }
}

const themeButtonNextSibling = document.querySelector("theme-button").nextElementSibling;
if (themeButtonNextSibling == null || themeButtonNextSibling !== document.querySelector("editor-button")) {
  document.querySelector("#theme").style.right = "-27px";
  document.querySelector("#switchyContainerAbsolute").style.right = "0";
}

function cssHoverEffect() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
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
