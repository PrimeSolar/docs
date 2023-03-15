//Comment

var createCommentary = document.getElementsByTagName('a-comment');
var commentaryTag = "<comment-tag onclick='displayCommentary(this)'/>";
var b = 0;
for (a = 0; a < createCommentary.length; a++) {
  createCommentary[a].insertAdjacentHTML("beforebegin", commentaryTag);
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
    element.nextSibling.style.zIndex = ++b;
  }
  var checkOutElement = element.parentNode.childNodes[0].tagName;
  if (checkOutElement == "COMMENT-LABEL") {
    element.nextSibling.style.transform = "translate(-25px, 30px)";
  } else {}
}
