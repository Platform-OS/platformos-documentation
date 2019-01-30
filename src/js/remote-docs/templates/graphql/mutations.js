const inputFields = `<h4>Input fields</h4>
<table class="table table-sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <%_ item.input_fields.map(function(a) { _%>
      <tr>
        <td><%= a.name _%></td>
        <td><%_ if (a.type) { _%><%= a.type.name _%><%_ } _%></td>
      </tr>
    <%_ }) _%>
  </tbody>
</table>
`;

const returnFields = `<h4 class="mt-4">Return fields</h4>
<table class="table table-sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <%_ item.return_fields.map(function(a) { _%>
      <tr>
        <td><%= a.name _%></td>
        <td><%_ if (a.type) { _%><%= a.type.name _%><%_ } _%></td>
        <td class="text-capitalize"><%_ if (a.description) { _%><%= a.description _%> <%_ } _%></td>
      </tr>
    <%_ }) _%>
  </tbody>
</table>
`;

const template = `<%_ items.map(function(item) { _%>
  <h3>
    <%= item.name %>
    <% if (item.type) { %><small>(<%= item.type.name _%>)</small><%_ } _%>
  </h3>

  <div class="border-bottom mb-5 pb-4">
    <%_ if (item.description) { _%>
     <p><%= item.description _%></p>
    <%_ } _%>

    <%_ if (item.input_fields) { _%>
     ${inputFields}
    <%_ } _%>

    <%_ if (item.return_fields) { _%>
     ${returnFields}
    <%_ } _%>
  </div>
<%_ }) _%>`;

module.exports = template;
