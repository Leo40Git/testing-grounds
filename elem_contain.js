function elem_contain(tagName) {
  let c = document.createElement(tagName);
  Element.prototype.append.apply(c, Array.prototype.slice.call(arguments, 1));
  return c;
}
