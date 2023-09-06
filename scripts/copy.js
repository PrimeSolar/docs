// Loop through each div with the class "sourceCode" and add a "Copy" button to them
const sourceCodeDivs = document.querySelectorAll(".sourceCode");
sourceCodeDivs.forEach((div, index) => {
  addCopyButtonToDiv(div);
});

function addCopyButtonToDiv(div) {
  const button = document.createElement("button");
  button.textContent = "Copy";
  button.onclick = function() {
    copy(div, this);
  };
  div.appendChild(button);
}

function copy(div, button) {
  let inputElement = document.createElement("textarea");
  document.body.appendChild(inputElement);

  let spans = div.querySelectorAll(".dt");
  let copyText = Array.from(spans).map(span => span.textContent).join('\n');

  inputElement.value = copyText;
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);

  button.textContent = "Copied!";
  setTimeout(function() {
    button.textContent = "Copy";
  }, 1000);
}
