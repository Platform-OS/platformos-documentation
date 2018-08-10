const initialize = () => {
  const liquidKeywords = /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow|include|form|endform|render_form|query_graph|execute_query|content_for|endcontent_for|yield|input|include_form|endinclude_form)\b/;

  import(/* webpackChunkName: "prism" */ "prismjs");
  import(/* webpackChunkName: "prism" */ "prismjs/plugins/line-numbers/prism-line-numbers");
  import(/* webpackChunkName: "prism" */ "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace");
  import(/* webpackChunkName: "prism" */ "prismjs/plugins/command-line/prism-command-line");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-bash");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-css-extras");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-css");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-graphql");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-javascript");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-json");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-markdown");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-markup");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-sass");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-scss");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-yaml");
  import(/* webpackChunkName: "prism" */ "prismjs/components/prism-liquid").then(() => {
    import(/* webpackChunkName: "prism" */ "prismjs/components/prism-twig").then(() => {
      Prism.languages.liquid = Prism.languages.twig;
      // Prism.languages.liquid.keyword = liquidKeywords;
    });
  });
};

if (document.querySelector("[class^=language]")) {
  initialize();
}
