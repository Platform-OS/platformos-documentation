const liquidKeywords = /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow|include|form|endform|render_form|query_graph|execute_query|content_for|endcontent_for|yield|input|include_form|endinclude_form)\b/;

import(/* webpackChunkName: "vendor" */ "prismjs").then(() => {
  document.addEventListener("turbolinks:load", Prism.highlightAll);
  document.addEventListener("prism:reinitialize", Prism.highlightAll);
});
import(/* webpackChunkName: "vendor" */ "prismjs/plugins/line-numbers/prism-line-numbers");
import(/* webpackChunkName: "vendor" */ "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace");
import(/* webpackChunkName: "vendor" */ "prismjs/plugins/command-line/prism-command-line");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-bash");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-css-extras");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-css");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-graphql");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-javascript");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-json");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-markdown");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-markup");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-sass");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-scss");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-yaml");
import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-liquid").then(() => {
  import(/* webpackChunkName: "vendor" */ "prismjs/components/prism-twig").then(() => {
    Prism.languages.liquid = Prism.languages.twig;
    // Prism.languages.liquid.keyword = liquidKeywords;
  });
});
