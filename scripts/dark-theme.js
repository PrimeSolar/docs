// click tumbler to toggle .light and .dark classes
// if class is not presented, determines actual condition based on the OS or web browser color scheme
// if OS and web browser color scheme aren't supported, determines light condition

function switchyDarkTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
  } else if (document.documentElement.classList.contains("light")) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("light")
    } else {
      document.documentElement.classList.add("dark")
    }
  }
}

const switchy = document.getElementById('switchy');

function moveIndicator() {
  switchy.classList.toggle('active');
}
switchy.addEventListener("click", moveIndicator, false);

console.log("dark-theme.js is completed");
