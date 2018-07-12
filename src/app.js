import "./app.scss";

const $win = $(window);
const $doc = $(document);

import btnMenu from "./js/btnMenu";
import widgetNav from "./js/widgetNav";
import tables from "./js/tables";
import tabs from "./js/tabs";
import scrollTo from "./js/scrollTo";
import Prism from "prismjs";
// Languages
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-git";
import "prismjs/components/prism-liquid";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-haml";
import "prismjs/components/prism-css";
import "prismjs/components/prism-css-extras";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-haml";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-graphql";
// Plugins
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

scrollTo();
tabs();
tables();
widgetNav();
btnMenu();
