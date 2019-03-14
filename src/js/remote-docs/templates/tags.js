const params = `<h4>Params</h4>
<ul>
  <%_ item.params.map(function(p) { _%>
    <li>
      <%= p.name %> (<%= p.types %>)
      <%_ if (p.description) { %> - <%= p.description %> <%_ } _%>
    </li>
  <%_ }) _%>
</ul>`;

const examples = `<h4>Examples</h4>
<%_ item.examples.map(function(e) { _%>
  <pre><code class="language-liquid line-numbers">
    <%= e %>
  </code></pre>
<%_ }) _%>`;

const template = `<%_ items.tags.map(function(item) { _%>
  <h2><%= item.name %></h2>

  <div class="border-bottom mb-5 pb-4">
    <%_ if (item.description) { _%>
      <p><%= item.description %></p>
    <%_ } _%>

    <%_ if (item.params && item.params.length > 0) { _%>
      ${params}
    <%_ } _%>

    <%_ if (item.examples && item.examples.length > 0) { _%>
      ${examples}
    <%_ } _%>
  </div>
<%_ }) _%>`;

module.exports = template;
