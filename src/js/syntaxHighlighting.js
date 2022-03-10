import '../css/overrides/syntaxHighlighting.css';

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/command-line/prism-command-line';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css-extras';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-liquid';

Prism.highlightAll();
