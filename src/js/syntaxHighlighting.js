// const liquidKeywords = /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow|include|form|endform|render_form|graphql|content_for|endcontent_for|yield|input|include_form|endinclude_form)\b/;

// TODO: Find a way to not emit 2 webpack chunks for syntax highlighting

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/command-line/prism-command-line';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css-extras';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-liquid';
import 'prismjs/components/prism-twig';

Prism.languages.liquid = Prism.languages.twig;
// Prism.languages.liquid.keyword = liquidKeywords;

Prism.highlightAll();
