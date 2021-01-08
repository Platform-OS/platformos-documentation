/*
 * @param  {Node}   elem     The element
 * @param  {String} parent   The selector for the parent to stop at
 */
const getParentsUntil = function(elem, parent) {
  const parents = [];

  // Get matching parent elements
  while (elem && elem !== document) {
    // If there's a parent and the element matches, break
    if (elem.matches(parent)) {
      break;
    }

    parents.push(elem);
    elem = elem.parentNode;
  }

  return parents;
};

export default getParentsUntil;
