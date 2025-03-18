// This script is designed for conditional formatting of web elements.

const p = document.getElementsByTagName("p");
for (let a of p) {
  if (a.closest(".center") == null) {
    a.innerHTML = "<indent></indent>" + a.innerHTML;
  }
}
