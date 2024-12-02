// This script is designed for conditional formatting of web elements.

// Select all paragraphs in the document
const p = document.getElementsByTagName("p");
// Iterate over each paragraph
for (let a of p) {
  // Check if the paragraph is not a descendant of an element with the "text-center" class and doesn't contain this class in itself
  if (a.closest(".text-center") == null) {
    // Prepend indentation to the paragraph
    a.innerHTML = "<indent></indent>" + a.innerHTML;
  }
}
