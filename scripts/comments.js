//Comment

const createCommentary = document.getElementsByTagName('a-comment');
const commentaryTag = "<comment-tag onclick='displayCommentary(this)'/>";
var zIndex = 0;
// Declare a, give it the value of createCommentary
for (let a of createCommentary) {
  a.insertAdjacentHTML("beforebegin", commentaryTag);
}

function displayCommentary(element) {
  if (element.nextSibling.classList.contains("shown")) {
    element.nextSibling.classList.remove("shown")
    element.nextSibling.classList.add("not-shown")
    element.nextSibling.style.display = "none";
    element.nextSibling.style.zIndex = "0";
  } else {
    element.nextSibling.classList.remove("not-shown")
    element.nextSibling.classList.add("shown")
    element.nextSibling.style.display = "block";
    element.nextSibling.style.zIndex = ++zIndex;
  }
  let checkOutElement = element.parentNode.childNodes[0].tagName;
  if (checkOutElement == "COMMENT-LABEL") {
    element.nextSibling.style.transform = "translate(-25px, 30px)";
  } else {}
}

console.log("comments.js is completed");
