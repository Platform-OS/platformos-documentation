const values = `<h4>Values</h4>
<ul>
  <% items.map(function(v) { %>
    <li>
      <%= v.name %>
      <% if (v.description) { %>- <%= v.description %><% } %>
    </li>
  <% }) %>
</ul>
`;

const template = `<%_ items.map(function(item) { _%>
  <h3>
    <%= item.name %>
  </h3>

  <div class="border-bottom mb-5 pb-4">
    <%_ if (item.description) { _%>
     <p><%= item.description _%></p>
    <%_ } _%>

    <%_ if (item.values) { _%>
      ${values}
    <%_ } _%>
  </div>
<%_ }) _%>`;

module.exports = template;
