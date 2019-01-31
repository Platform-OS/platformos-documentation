const implementedBy = `<h4>Implemented by</h4>
<ul>
  <%_ item.implemented_by.map(function(i) { _%>
    <li><a href="/api-reference/graphql/objects#<%= i.toLowerCase() _%>"><%= i _%></a></li>
  <%_ }) _%>
</ul>
`;

const fields = `<h4>Fields</h4>
<table class="table table-sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <%_ item.fields.map(function(f) { _%>
      <tr>
        <td><%= f.name _%></td>
        <td><%_ if (f.type) { _%><%= f.type.info _%><%_ } _%></td>
        <td class="text-capitalize">
          <%_ if (f.description) { _%><%= f.description _%> <%_ } _%>
          <%_ if (f.default_value) { _%>Default: <code><%= f.default_value _%></code><%_ } _%>
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

    <%_ if (item.implemented_by) { _%>
      ${implementedBy}
    <%_ } _%>

    <%_ if (item.fields) { _%>
      ${fields}
    <%_ } _%>
  </div>
<%_ }) _%>`;

module.exports = template;
