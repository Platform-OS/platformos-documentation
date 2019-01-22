const returns = `<h4>Returns:</h4>
<% item.returns.map(function(r) { %>
  <p>
    <%= JSON.parse(r.types) %>
    <% if (r.description) { %> - <%= r.description %> <% } %>
  </p>
<% }) %>`;

const params = `<h4>Params:</h4>
<ul>
  <% item.params.map(function(p) { %>
    <li>
      <%= p.name %> (<%= p.types.map(function(t) { return t }) %>)
      <% if (p.description) { %> - <%= p.description %> <% } %>
    </li>
  <% }) %>
</ul>`;

const examples = `<h4>Examples:</h4>
<% item.examples.map(function(e) { %>
  <pre><code class="language-liquid line-numbers">
    <%= e %>
  </code></pre>
<% }) %>`;

const template = `<%_ items.filters.map(function(item) { _%>
  <h2><%= item.name %></h2>

  <div class="border-bottom mb-5 pb-5">
    ${returns}
    ${params}
    ${examples}
  </div>
<%_ }) _%>`;

module.exports = template;
