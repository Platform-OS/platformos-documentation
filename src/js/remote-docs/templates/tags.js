const params = `<h4>Params:</h4>
<ul>
  <%_ item.params.map(function(p) { _%>
    <li>
      <%= p.name %> (<%= p.types %>)
      <% if (p.description) { %> - <%= p.description %> <% } %>
    </li>
  <%_ }) _%>
</ul>`;

const examples = `<h4>Examples:</h4>
<%_ item.examples.map(function(e) { _%>
  <pre><code class="language-liquid line-numbers">
    <%= e %>
  </code></pre>
<%_ }) _%>`;

const template = `<%_ items.tags.map(function(item) { _%>
  <h2><%= item.name %></h2>

  <div class="border-bottom mb-5 pb-5">
    <% if (item.params.length > 0) { %>
      ${params}
    <% } %>

    <% if (item.examples.length > 0) { %>
      ${examples}
    <% } %>
  </div>
<%_ }) _%>`;

module.exports = template;
