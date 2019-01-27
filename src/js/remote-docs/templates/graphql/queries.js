const args = `<h4>Arguments</h4>
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <%_ item.arguments.map(function(a) { _%>
      <tr>
        <td><%= a.name _%></td>
        <td><%_ if (a.type) { _%><%= a.type.info _%><%_ } _%></td>
        <td><%_ if (a.default_value) { _%><%= a.default_value _%><%_ } _%></td>
        <td class="text-capitalize"><%_ if (a.description) { _%><%= a.description _%> <%_ } _%></td>
      </tr>
    <%_ }) _%>
  </tbody>
</table>
`;

const template = `<%_ items[0].fields.map(function(item) { _%>
  <h3>
    <%= item.name %>
    <% if (item.type) { %><small>(<%= item.type.info _%>)</small><%_ } _%>
  </h3>

  <div class="border-bottom mb-5 pb-4">
    <%_ if (item.description) { _%>
     <p><%= item.description _%></p>
    <%_ } _%>

    <%_ if (item.arguments) { _%>
      ${args}
    <%_ } _%>
  </div>
<%_ }) _%>`;

module.exports = template;
