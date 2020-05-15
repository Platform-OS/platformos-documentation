(function() {
  var HIDE_CLASS = 'hidden';
  var ITEM_CLASS = 'inline-block';

  function Item(li) {
    this.li = li;
    this.type = li.title;
    this.typeLowerCase = li.title.toLowerCase();
  }

  Item.prototype.contains = function(searchText) {
    return this.typeLowerCase.indexOf(searchText) >= 0;
  };

  Item.prototype.isHide = function() {
    this.li.classList.contains(HIDE_CLASS);
  };

  Item.prototype.hide = function() {
    if (!this.isHide()) this.li.classList.add(HIDE_CLASS);
  };

  Item.prototype.show = function() {
    this.li.classList.remove(HIDE_CLASS);
  };

  function ItemList(items) {
    this.items = items;
  }

  ItemList.fromSelector = function(selector) {
    var lis = document.querySelectorAll(selector);
    var items = Array.prototype.map.call(lis, function(li) {
      return new Item(li);
    });

    return new ItemList(items);
  };

  ItemList.prototype.showIfmatch = function(match) {
    match = match.toLowerCase(match);

    this.items.forEach(function(item) {
      item.contains(match) ? item.show() : item.hide();
    });
  };

  var items = ItemList.fromSelector('nav ul li');
  var input = document.getElementById('type-search');
  var lastMatch = '';

  function onChange() {
    if (input.value === lastMatch) return;

    lastMatch = input.value;
    items.showIfmatch(lastMatch);
  }

  input.addEventListener('change', onChange);
  input.addEventListener('keyup', onChange);
  input.addEventListener('mouseup', onChange);
})();
