/*
 * Copy Button Functionality for Code Blocks
 *
 * This script loops through all <codeblock> elements on the page
 * and adds a "Copy" button to each one. When clicked, the button
 * calls the "copy" function, that copies the text content of
 * the corresponding code block to the clipboard. The button also
 * provides user feedback by changing its text to "Copied!" for
 * one second, then reverting back to "Copy". This enhances
 * user interaction and simplifies the process of copying code snippets.
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

// Loop through each codeblock and add "Copy" buttons to them
const codeblocks = document.querySelectorAll("codeblock");
codeblocks.forEach((codeblock) => {
  addCopyButtonToCodeblock(codeblock);
});

function addCopyButtonToCodeblock(codeblock) {
  const button = document.createElement("button");
  button.textContent = "Copy";
  button.onclick = function () {
    copy(codeblock, this); // Pass the specific codeblock to the copy function
  };
  codeblock.appendChild(button); // Append the button to the codeblock
}

function copy(codeblock, button) {
  let inputElement = document.createElement("textarea");
  document.body.appendChild(inputElement);

  let copyText = codeblock.textContent; // Get the text content of the specific codeblock

  // Remove the text content of the button ("Copy") from the output if it exists
  const buttonText = button.textContent; // Get the text content of the button
  if (copyText.endsWith(buttonText)) {
    copyText = copyText.slice(0, -buttonText.length).trim(); // Remove the text content of the button
  }

  inputElement.value = copyText;
  inputElement.select(); // Select the code
  document.execCommand("copy"); // Copy the code to the clipboard
  document.body.removeChild(inputElement);

  button.textContent = "Copied!"; // Notify a user
  setTimeout(function () {
    button.textContent = "Copy";
  }, 1000); // Reset the text content of the button after 1 second
}
