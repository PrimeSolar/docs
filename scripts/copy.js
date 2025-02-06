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
