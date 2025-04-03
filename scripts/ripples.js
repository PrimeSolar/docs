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
