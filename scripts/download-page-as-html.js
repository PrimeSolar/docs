function downloadPageAsHTML() {
  const content = document.querySelector("body").innerHTML;

  // Fetch the CSS content from the external URL
  fetch(
    "https://raw.githubusercontent.com/PrimeSolar/docs/refs/heads/main/styles/azure.css"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Get the CSS text
    })
    .then((cssContent) => {
      // Create the HTML content with the CSS included
      const htmlBlob = new Blob(
        [
          `
            <html>
                <head>
                    <style>
                        ${cssContent} /* Insert the fetched CSS here */
                    </style>
                </head>
                <body>${content}</body>
            </html>
        `,
        ],
        { type: "text/html" }
      );

      // Extract the filename from the current URL
      const url = window.location.href;
      const filename =
        url.substring(
          url.lastIndexOf("/") + 1,
          url.indexOf("#") !== -1 ? url.indexOf("#") : undefined
        ) || "edited_content.html"; // Default name if no filename found

      const htmlLink = document.createElement("a");
      htmlLink.href = URL.createObjectURL(htmlBlob);
      htmlLink.download = filename; // Use the extracted filename
      htmlLink.click();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

document
  .getElementById("downloadPageAsHTMLBtn")
  .addEventListener("click", downloadPageAsHTML, !1);

// Keyboard shortcut for saving content
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "s") {
    // Ctrl + S
    event.preventDefault(); // Prevent default save action
    downloadPageAsHTML();
  }
});
