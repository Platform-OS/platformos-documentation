const inputFields = `<h4>Input fields</h4>

<table class="table table-sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <%_ item.input_fields.map(function(i) { _%>
      <tr>
        <td>
          <%= i.name _%>
        </td>
        <td>
          <%_ if (i.type) { _%><%= i.type.name _%><%_ } _%>
        </td>
        <td class="text-capitalize">
          <%_ if (i.description) { _%><%= i.description _%><%_ } _%>
        </td>
      </tr>
    <%_ }) _%>
  </tbody>
</table>
`;

const template = `<%_ items.map(function(item) { _%>
  <h3>
    <%= item.name _%>
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
