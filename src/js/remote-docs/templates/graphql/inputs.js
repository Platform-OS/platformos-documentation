const inputFields = `<h4>Input fields</h4>

<table class="table table-sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <% item.input_fields.map(function(i) { %>
      <tr>
        <td>
          <%= i.name %>
        </td>
        <td class="text-capitalize">
          <% if (i.description) { %><%= i.description %><% } %>
        </td>
      </tr>
    <% }) %>
  </tbody>
</table>
`;

const template = `<%_ items.map(function(item) { _%>
  <h3>
    <%= item.name %>
  </h3>

  <div class="border-bottom mb-5 pb-4">
    <%_ if (item.description) { _%>
     <p><%= item.description _%></p>
    <%_ } _%>

    <%_ if (item.input_fields) { _%>
      ${inputFields}
    <%_ } _%>
  </div>
<%_ }) _%>`;

module.exports = template;
