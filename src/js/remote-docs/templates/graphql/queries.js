const args = `<h4>Arguments</h4>
<table class="table table-sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <%_ item.arguments.map(function(a) { _%>
      <tr>
        <td><%= a.name _%></td>
        <td><%_ if (a.type) { _%><%= a.type.name _%><%_ } _%></td>
        <td class="text-capitalize">
          <%_ if (a.description) { _%><%= a.description _%> <%_ } _%>
          <%_ if (a.default_value) { _%>Default: <code><%= a.default_value _%></code><%_ } _%>
        </td>
      </tr>
    <%_ }) _%>
  </tbody>
</table>
`;

const template = `<%_ items[0].fields.map(function(item) { _%>
  <h3>
    <%= item.name %>
    <% if (item.type) { %>
      <small>
        (type: <a href="/api-reference/graphql/objects#<%= item.type.name.toLowerCase() _%>"><%= item.type.name _%></a>)
      </small>
    <%_ } _%>
  </h3>

  <div class="border-bottom mb-5 pb-4">
    <%_ if (item.description) { _%>
     <p><%= item.description _%></p>
    <%_ } _%>

    <%_ if (item.arguments.length > 0) { _%>
      ${args}
    <%_ } _%>
  </div>
<%_ }) _%>`;

module.exports = template;
