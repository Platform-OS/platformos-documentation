export default function(element) {
  return (element.innerHTML = element.innerHTML
    .replace(/<p><\/p>/g, "") // empty markdown p's
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;"));
}
