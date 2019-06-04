const returns = `<h4>Returns</h4>
<%_ item.returns.map(function(r) { _%>
  <p>
    <%_ if (r.types) { _%><%= r.types.join(', ') _%><% } %>
    <% if (r.description) { %> - <%= r.description %> <%_ } _%>
  </p>
<%_ }) _%>`;

const params = `<h4>Params</h4>
<ul>
  <%_ item.params.map(function(p) { _%>
    <li>
      <%= p.name %> (<%= p.types %>)
      <%_ if (p.description) { %> - <%= p.description _%> <%_ } _%>
    </li>
  <%_ }) _%>
</ul>`;

const examples = `<h4>Examples</h4>
<%_ item.examples.map(function(e) { _%>
  <pre><code class="language-liquid line-numbers">
    <%= e %>
  </code></pre>
<%_ }) _%>`;

const aliases = `<h4 class="mb-3">Aliases:
  <small>
    <% item.aliases.map(a => { %>
      <code class="mr-3"><%= a %></code>
    <% }) %>
  </small>
</h4>`;

const template = `<%_ items.filters.map(function(item) { _%>
  <h2><%= item.name %></h2>


  <%_ if (item.aliases.length > 0) { _%>
    ${aliases}
  <%_ } _%>

  <div class="border-bottom mb-5 pb-4">
    <%_ if (item.returns) { _%>
      ${returns}
    <%_ } _%>

    <%_ if (item.params) { _%>
      ${params}
    <%_ } _%>

    <%_ if (item.examples) { _%>
      ${examples}
    <%_ } _%>
  </div>
<%_ }) _%>`;

module.exports = template;
