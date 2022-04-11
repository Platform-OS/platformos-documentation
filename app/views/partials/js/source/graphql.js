(function(){var __webpack_modules__={"./modules/graphql/public/assets/filter-types.js":function(){eval(`(function() {
  var HIDE_CLASS = "hidden";
  var ITEM_CLASS = "inline-block";
  function Item(el) {
    this.li = el;
    const title = el.querySelector("a").textContent;
    this.typeLowerCase = title.toLowerCase();
  }
  Item.prototype.contains = function(searchText) {
    return this.typeLowerCase.indexOf(searchText) >= 0;
  };
  Item.prototype.isHide = function() {
    this.li.classList.contains(HIDE_CLASS);
  };
  Item.prototype.hide = function() {
    if (!this.isHide())
      this.li.classList.add(HIDE_CLASS);
  };
  Item.prototype.show = function() {
    this.li.classList.remove(HIDE_CLASS);
  };
  function ItemList(items2) {
    this.items = items2;
  }
  ItemList.fromSelector = function(selector) {
    var lis = document.querySelectorAll(selector);
    var items2 = Array.prototype.map.call(lis, function(li) {
      return new Item(li);
    });
    return new ItemList(items2);
  };
  ItemList.prototype.showIfmatch = function(match) {
    match = match.toLowerCase(match);
    this.items.forEach(function(item) {
      item.contains(match) ? item.show() : item.hide();
    });
  };
  var items = ItemList.fromSelector("nav ul li");
  var input = document.getElementById("type-search");
  var lastMatch = "";
  function expandTitle(title) {
    title.classList.add("active");
    let result = title.nextElementSibling;
    result.classList.add("active");
    if (title.firstElementChild.innerText === "+") {
      title.firstElementChild.innerText = "-";
    } else {
      title.firstElementChild.innerText = "+";
    }
  }
  function toggleTitles() {
    let titles = document.querySelectorAll("nav>h4");
    titles.forEach((title) => {
      title.addEventListener("click", function() {
        this.classList.toggle("active");
        let result = this.nextElementSibling;
        result.classList.toggle("active");
        if (this.firstElementChild.innerText === "+") {
          this.firstElementChild.innerText = "-";
        } else {
          this.firstElementChild.innerText = "+";
        }
      });
    });
  }
  function onChange() {
    let titles = document.querySelectorAll("nav>h4:not(.active)");
    titles.forEach((title) => expandTitle(title));
    if (input.value === lastMatch)
      return;
    lastMatch = input.value;
    items.showIfmatch(lastMatch);
  }
  input.addEventListener("change", onChange);
  input.addEventListener("keyup", onChange);
  input.addEventListener("mouseup", onChange);
  toggleTitles();
})();


//# sourceURL=webpack://platform-os-documentation/./modules/graphql/public/assets/filter-types.js?`)},"./modules/graphql/public/assets/graphql.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-types */ "./modules/graphql/public/assets/filter-types.js");
/* harmony import */ var _filter_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_filter_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _line_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-link */ "./modules/graphql/public/assets/line-link.js");
/* harmony import */ var _line_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_line_link__WEBPACK_IMPORTED_MODULE_1__);




//# sourceURL=webpack://platform-os-documentation/./modules/graphql/public/assets/graphql.js?`)},"./modules/graphql/public/assets/line-link.js":function(){eval(`(function() {
  ready(function() {
    var tables = window.document.getElementsByClassName("code");
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      table.addEventListener("click", onClick);
    }
    window.addEventListener("hashchange", onHashChange, false);
    onHashChange();
  });
  function onHashChange() {
    var id = window.location.href.split("#")[1];
    if (!id) {
      return;
    }
    var lcid = id.indexOf("C") === -1 ? id.replace("L", "LC") : id;
    var lineCode = window.document.getElementById(lcid);
    if (!lineCode) {
      return;
    }
    var highlighted = lineCode.closest(".code").getElementsByClassName("highlighted");
    for (var i = 0; i < highlighted.length; i++) {
      highlighted[i].classList.remove("highlighted");
    }
    lineCode.classList.add("highlighted");
  }
  function onClick(e) {
    var target = e.target;
    if (!target.classList.contains("td-index")) {
      return;
    }
    var href = window.location.href.split("#")[0];
    window.location.href = href + "#" + target.id;
  }
  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }
})();


//# sourceURL=webpack://platform-os-documentation/./modules/graphql/public/assets/line-link.js?`)}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(n!==void 0)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}(function(){__webpack_require__.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(n,{a:n}),n}})(),function(){__webpack_require__.d=function(e,n){for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){__webpack_require__.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),typeof __webpack_require__!="undefined"&&Object.defineProperty(__webpack_require__,"p",{get:function(){try{if(typeof window.__CONTEXT__.cdnUrl!="function")throw new Error("WebpackRequireFrom: 'window.__CONTEXT__.cdnUrl' is not a function or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return window.__CONTEXT__.cdnUrl()}catch(e){return console.error(e),""}},set:function(e){console.warn("WebpackRequireFrom: something is trying to override webpack public path. Ignoring the new value"+e+".")}});var __webpack_exports__=__webpack_require__("./modules/graphql/public/assets/graphql.js")})();
