/**
 * Commentary Display Script
 *
 * This script creates interactive commentary elements for each
 * <a-comment> tag found in the document. It inserts custom
 * <comment-tag> tags, enabling user interaction
 * to display or hide associated commentary. The
 * "displayCommentary" function toggles the visibility of the
 * commentary and adjusts layering. It also
 * checks if the preceding node is a <comment-label> to apply
 * a specific positioning rule.
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

const createCommentary = document.getElementsByTagName("a-comment");
const commentaryTag = "<comment-tag onclick='displayCommentary(this)'/>";
let zIndex = 0;
for (let a of createCommentary) {
  a.insertAdjacentHTML("beforebegin", commentaryTag);
}

function displayCommentary(element) {
  if (element.nextSibling.classList.contains("shown")) {
    element.nextSibling.classList.remove("shown");
    element.nextSibling.classList.add("not-shown");
    element.nextSibling.style.display = "none";
    element.nextSibling.style.zIndex = "0";
  } else {
    element.nextSibling.classList.remove("not-shown");
    element.nextSibling.classList.add("shown");
    element.nextSibling.style.display = "block";
    element.nextSibling.style.zIndex = ++zIndex;
  }
  let checkOutElement = element.parentNode.childNodes[0].tagName;
  if (checkOutElement == "COMMENT-LABEL") {
    element.nextSibling.style.transform = "translate(-25px, 30px)";
  } else {
  }
}

console.log("comments.js is completed");
