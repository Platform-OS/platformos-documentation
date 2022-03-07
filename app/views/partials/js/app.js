(function(){"use strict";var __webpack_modules__={"./src/app.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _js_helpers_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/helpers/dom */ "./src/js/helpers/dom.js");
/* harmony import */ var _js_sidebarMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/sidebarMenu */ "./src/js/sidebarMenu.js");
/* harmony import */ var _js_deepLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/deepLinks */ "./src/js/deepLinks.js");
/* harmony import */ var _js_autosteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/autosteps */ "./src/js/autosteps.js");
/* harmony import */ var _js_toc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/toc */ "./src/js/toc.js");
/* harmony import */ var _js_externalLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/externalLinks */ "./src/js/externalLinks.js");
/* harmony import */ var _js_feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/feedback */ "./src/js/feedback.js");








Promise.all(/*! import() | search */[__webpack_require__.e("vendors-node_modules_docsearch_js_dist_npm_index_js-node_modules_docsearch_js_dist_cdn_docsea-8231d2"), __webpack_require__.e("search")]).then(__webpack_require__.bind(__webpack_require__, /*! ./js/search */ "./src/js/search.js"));
if ((0,_js_helpers_dom__WEBPACK_IMPORTED_MODULE_1__.$q)('code[class*="language-"]')) {
  Promise.all(/*! import() | syntaxHighlighting */[__webpack_require__.e("vendors-node_modules_prismjs_components_prism-bash_js-node_modules_prismjs_components_prism-c-b86987"), __webpack_require__.e("syntaxHighlighting")]).then(__webpack_require__.bind(__webpack_require__, /*! ./js/syntaxHighlighting */ "./src/js/syntaxHighlighting.js"));
}
if ((0,_js_helpers_dom__WEBPACK_IMPORTED_MODULE_1__.$q)(".graphql-navigation")) {
  __webpack_require__.e(/*! import() | graphqlNavigation */ "graphqlNavigation").then(__webpack_require__.bind(__webpack_require__, /*! ./js/graphqlNavigation */ "./src/js/graphqlNavigation.js"));
}


//# sourceURL=webpack://platform-os-documentation/./src/app.js?`)},"./src/js/autosteps.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dom */ "./src/js/helpers/dom.js");
/* harmony import */ var _helpers_headings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/headings */ "./src/js/helpers/headings.js");


const isStep = (h) => /^Step \\w+:/.test(h.textContent);
const getContainer = () => (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$q)("[data-autosteps]");
const getSteps = () => {
  const headings = (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$qa)(".content h3");
  return headings.filter(isStep);
};
const generateSteps = (headings) => {
  return headings.map((h) => {
    return \`<li>
        <a href="\${h.href}">\${h.text}</a>
      </li>\`;
  }).join("");
};
const initialize = () => {
  const container = getContainer();
  const stepsHeadings = getSteps();
  if (!container || stepsHeadings.length < 1) {
    return;
  }
  const stepsList = generateSteps((0,_helpers_headings__WEBPACK_IMPORTED_MODULE_1__.parseHeadings)(stepsHeadings));
  const stepsHtml = \`
    <ul class="content__autosteps">
      \${stepsList}
    </ul>
  \`;
  container.innerHTML = stepsHtml;
};
initialize();


//# sourceURL=webpack://platform-os-documentation/./src/js/autosteps.js?`)},"./src/js/deepLinks.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dom */ "./src/js/helpers/dom.js");
/* harmony import */ var _helpers_urlify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/urlify */ "./src/js/helpers/urlify.js");


const alreadyLinked = (el) => el.querySelectorAll("a.anchorjs-link").length > 0;
const generateAnchor = ({ tidyID, text }) => {
  let anchor = document.createElement("a");
  anchor.innerHTML = \`<span class="screen-reader-text">\${text}</span><svg width="16" height="16"><use xlink:href="#link"></use></svg>\`;
  anchor.className = "anchorjs-link";
  anchor.href = \`#\${tidyID}\`;
  return anchor;
};
const generateDeepLinks = ({ elements }) => {
  for (let el of elements) {
    if (!el.textContent.trim() || el.id || alreadyLinked(el)) {
      continue;
    }
    const tidyID = (0,_helpers_urlify__WEBPACK_IMPORTED_MODULE_1__["default"])(el.textContent);
    const anchor = generateAnchor({ tidyID, text: el.textContent });
    el.id = tidyID;
    el.classList.add("anchorjs-element");
    el.insertBefore(anchor, el.firstChild);
  }
};
const initialize = () => {
  const headings = (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$qa)(".content__main h2, .content__main h3");
  generateDeepLinks({ elements: headings });
};
initialize();


//# sourceURL=webpack://platform-os-documentation/./src/js/deepLinks.js?`)},"./src/js/externalLinks.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dom */ "./src/js/helpers/dom.js");

const externalLinks = () => (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$qa)('a[href^="http"]');
if (externalLinks().length > 0) {
  externalLinks().map((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "external noopener");
    link.setAttribute("onclick", 'return confirm("This link will open in new tab.")');
  });
}


//# sourceURL=webpack://platform-os-documentation/./src/js/externalLinks.js?`)},"./src/js/feedback.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dom */ "./src/js/helpers/dom.js");

const form = () => (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$q)('[data-feedback="form"]');
const selectedValues = () => (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$qa)("[data-feedback-selected-value]");
const questionsContainer = () => (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$q)('[data-feedback="questions"]');
const questionValues = () => (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$qa)("[data-feedback-value]");
const toggleQuestionsContainer = (addOrRemove) => questionsContainer().classList.toggle("hidden", addOrRemove);
const hideQuestions = () => questionValues().map((el) => el.classList.add("hidden"));
const showQuestion = (value) => form().querySelector(\`[data-feedback-value="\${value}"]\`).classList.remove("hidden");
const updateFormForCustomizationUpdate = (id) => {
  if (!id) {
    return;
  }
  form().setAttribute("action", \`/api/customizations/\${id}\`);
  form().insertAdjacentHTML("beforeend", '<input type="hidden" name="_method" value="PUT">');
};
const sendFeedback = () => {
  return fetch(form().getAttribute("action"), {
    method: form().getAttribute("method"),
    body: new FormData(form()),
    credentials: "same-origin"
  }).then((response) => response.status === 201 ? response.json() : { id: null }).then((customization) => updateFormForCustomizationUpdate(customization.id)).catch((e) => {
    throw new Error(e);
  });
};
const onRatingSelected = (event) => {
  const selectedValue = event.target.value;
  toggleQuestionsContainer(true);
  hideQuestions();
  sendFeedback().then(() => {
    showQuestion(selectedValue);
    toggleQuestionsContainer(false);
  });
};
if (form()) {
  selectedValues().map((el) => el.addEventListener("change", onRatingSelected));
}


//# sourceURL=webpack://platform-os-documentation/./src/js/feedback.js?`)},"./src/js/helpers/dom.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$q": function() { return /* binding */ $q; },
/* harmony export */   "$qa": function() { return /* binding */ $qa; }
/* harmony export */ });
const $q = (s, p = document) => p.querySelector(s);
const $qa = (s, p = document) => Array.from(p.querySelectorAll(s));



//# sourceURL=webpack://platform-os-documentation/./src/js/helpers/dom.js?`)},"./src/js/helpers/headings.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeadings": function() { return /* binding */ getHeadings; },
/* harmony export */   "parseHeadings": function() { return /* binding */ parseHeadings; }
/* harmony export */ });
/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/dom */ "./src/js/helpers/dom.js");

const parseHeadings = (headings) => {
  return headings.map((heading) => {
    return {
      href: \`#\${heading.id}\`,
      text: (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$q)("span", heading).textContent.trim()
    };
  });
};
const getHeadings = () => (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$qa)(".content__main h2[id]");



//# sourceURL=webpack://platform-os-documentation/./src/js/helpers/headings.js?`)},"./src/js/helpers/urlify.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
const urlify = (text) => {
  var nonsafeChars = /[& +$,:;=?@"#{}|^~[\`%!'<>\\]\\.\\/\\(\\)\\*\\\\\\n\\t\\b\\v]/g, urlText;
  urlText = text.trim().replace(/\\'/gi, "").replace(nonsafeChars, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/gm, "").toLowerCase();
  return urlText;
};
/* harmony default export */ __webpack_exports__["default"] = (urlify);


//# sourceURL=webpack://platform-os-documentation/./src/js/helpers/urlify.js?`)},"./src/js/sidebarMenu.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dom */ "./src/js/helpers/dom.js");

const currentPath = location.pathname;
(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$qa)(\`.nav-sidebar a[href="\${currentPath}"]\`).map((a) => a.classList.add("active"));
const firstLevel = (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$qa)(".nav-sidebar > ul > li:not(.topic-group):not(.active)");
for (let index in firstLevel) {
  const item = firstLevel[index];
  const newIndicator = (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$q)(".new", item);
  const hasNew = (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$q)(".submenu", item) && !!newIndicator;
  if (hasNew) {
    (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$q)("a", item).appendChild(newIndicator.cloneNode(true));
    continue;
  }
}


//# sourceURL=webpack://platform-os-documentation/./src/js/sidebarMenu.js?`)},"./src/js/toc.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/dom */ "./src/js/helpers/dom.js");
/* harmony import */ var _helpers_headings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/headings */ "./src/js/helpers/headings.js");


const getContainer = () => (0,_helpers_dom__WEBPACK_IMPORTED_MODULE_0__.$q)("[data-autotoc]");
const generateTOCList = (headings) => {
  return headings.map((h) => {
    return \`<li>
        <a href="\${h.href}">
          \${h.text}
        </a>
      </li>\`;
  }).join("");
};
const initialize = () => {
  const container = getContainer();
  const headings = (0,_helpers_headings__WEBPACK_IMPORTED_MODULE_1__.getHeadings)();
  if (!container || headings.length < 3) {
    return;
  }
  const tocHTML = generateTOCList((0,_helpers_headings__WEBPACK_IMPORTED_MODULE_1__.parseHeadings)(headings));
  const tocDOM = \`<div class="hidden p-8 md:block bg-pos-page-bg table-of-content">
      <h4 class="mb-4 text-lg">On this page</h4>
      <ul class="pl-0 list-none">\${tocHTML}</ul>
    </div>\`;
  container.innerHTML = tocDOM;
};
initialize();


//# sourceURL=webpack://platform-os-documentation/./src/js/toc.js?`)},"./src/app.css":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


//# sourceURL=webpack://platform-os-documentation/./src/app.css?`)}},__webpack_module_cache__={};function __webpack_require__(e){var o=__webpack_module_cache__[e];if(o!==void 0)return o.exports;var s=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(s.exports,s,s.exports,__webpack_require__),s.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(o,{a:o}),o}}(),function(){__webpack_require__.d=function(e,o){for(var s in o)__webpack_require__.o(o,s)&&!__webpack_require__.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(o,s){return __webpack_require__.f[s](e,o),o},[]))}}(),function(){__webpack_require__.u=function(e){return"assets/"+e+"."+{"vendors-node_modules_docsearch_js_dist_npm_index_js-node_modules_docsearch_js_dist_cdn_docsea-8231d2":"934",search:"f63","vendors-node_modules_prismjs_components_prism-bash_js-node_modules_prismjs_components_prism-c-b86987":"53a",syntaxHighlighting:"4f3",graphqlNavigation:"b7b"}[e]+".js"}}(),function(){__webpack_require__.miniCssF=function(e){return"assets/"+e+"."+{"vendors-node_modules_docsearch_js_dist_npm_index_js-node_modules_docsearch_js_dist_cdn_docsea-8231d2":"934",search:"f63",syntaxHighlighting:"4f3"}[e]+".css"}}(),function(){__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}()}(),function(){__webpack_require__.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="platform-os-documentation:";__webpack_require__.l=function(s,i,r,a){if(e[s]){e[s].push(i);return}var n,c;if(r!==void 0)for(var _=document.getElementsByTagName("script"),p=0;p<_.length;p++){var t=_[p];if(t.getAttribute("src")==s||t.getAttribute("data-webpack")==o+r){n=t;break}}n||(c=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",o+r),n.src=s),e[s]=[i];var u=function(d,h){n.onerror=n.onload=null,clearTimeout(l);var m=e[s];if(delete e[s],n.parentNode&&n.parentNode.removeChild(n),m&&m.forEach(function(b){return b(h)}),d)return d(h)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=u.bind(null,n.onerror),n.onload=u.bind(null,n.onload),c&&document.head.appendChild(n)}}(),function(){__webpack_require__.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){__webpack_require__.p=""}(),typeof __webpack_require__!="undefined"&&Object.defineProperty(__webpack_require__,"p",{get:function(){try{if(typeof window.__CONTEXT__.cdnUrl!="function")throw new Error("WebpackRequireFrom: 'window.__CONTEXT__.cdnUrl' is not a function or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return window.__CONTEXT__.cdnUrl()}catch(e){return console.error(e),""}},set:function(e){console.warn("WebpackRequireFrom: something is trying to override webpack public path. Ignoring the new value"+e+".")}}),function(){var e=function(r,a,n,c){var _=document.createElement("link");_.rel="stylesheet",_.type="text/css";var p=function(t){if(_.onerror=_.onload=null,t.type==="load")n();else{var u=t&&(t.type==="load"?"missing":t.type),l=t&&t.target&&t.target.href||a,d=new Error("Loading CSS chunk "+r+` failed.
(`+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=u,d.request=l,_.parentNode.removeChild(_),c(d)}};return _.onerror=_.onload=p,_.href=a,document.head.appendChild(_),_},o=function(r,a){for(var n=document.getElementsByTagName("link"),c=0;c<n.length;c++){var _=n[c],p=_.getAttribute("data-href")||_.getAttribute("href");if(_.rel==="stylesheet"&&(p===r||p===a))return _}for(var t=document.getElementsByTagName("style"),c=0;c<t.length;c++){var _=t[c],p=_.getAttribute("data-href");if(p===r||p===a)return _}},s=function(r){return new Promise(function(a,n){var c=__webpack_require__.miniCssF(r),_=__webpack_require__.p+c;if(o(c,_))return a();e(r,_,a,n)})},i={app:0};__webpack_require__.f.miniCss=function(r,a){var n={"vendors-node_modules_docsearch_js_dist_npm_index_js-node_modules_docsearch_js_dist_cdn_docsea-8231d2":1,search:1,syntaxHighlighting:1};i[r]?a.push(i[r]):i[r]!==0&&n[r]&&a.push(i[r]=s(r).then(function(){i[r]=0},function(c){throw delete i[r],c}))}}(),function(){var e={app:0};__webpack_require__.f.j=function(i,r){var a=__webpack_require__.o(e,i)?e[i]:void 0;if(a!==0)if(a)r.push(a[2]);else{var n=new Promise(function(t,u){a=e[i]=[t,u]});r.push(a[2]=n);var c=__webpack_require__.p+__webpack_require__.u(i),_=new Error,p=function(t){if(__webpack_require__.o(e,i)&&(a=e[i],a!==0&&(e[i]=void 0),a)){var u=t&&(t.type==="load"?"missing":t.type),l=t&&t.target&&t.target.src;_.message="Loading chunk "+i+` failed.
(`+u+": "+l+")",_.name="ChunkLoadError",_.type=u,_.request=l,a[1](_)}};__webpack_require__.l(c,p,"chunk-"+i,i)}};var o=function(i,r){var a=r[0],n=r[1],c=r[2],_,p,t=0;if(a.some(function(l){return e[l]!==0})){for(_ in n)__webpack_require__.o(n,_)&&(__webpack_require__.m[_]=n[_]);if(c)var u=c(__webpack_require__)}for(i&&i(r);t<a.length;t++)p=a[t],__webpack_require__.o(e,p)&&e[p]&&e[p][0](),e[p]=0},s=self.webpackChunkplatform_os_documentation=self.webpackChunkplatform_os_documentation||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))}();var __webpack_exports__=__webpack_require__("./src/app.js")})();
