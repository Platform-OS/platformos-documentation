export default function(element) {
  return (element.innerHTML = element.innerHTML
    .replace(/<p><\/p>/g, "") // empty markdown p's
    .replace(/&/g, "&amp;") // TODO: Improve regexp to not touch yml/liquid comparisons - or - replace only in html tags.
    .replace(/</g, "&lt;") // TODO: Improve regexp to not touch yml/liquid comparisons - or - replace only in html tags.
    .replace(/>/g, "&gt;") // TODO: Improve regexp to not touch yml/liquid comparisons - or - replace only in html tags.
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;"));
}
