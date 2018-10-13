const request = `<%_ let req = value.request _%>

  <%_ if (req) { _%>
    <h4>Request</h4>
    <%_ if (Object.keys(req.params).length > 0) { _%>
      <p>Params</p>
      <pre><code class="language-json line-numbers">
        <%- JSON.stringify(req.params, null, 2) %>
      </code></pre>
    <%_ } _%>

    <p class="mt-4">cURL example</p>
    <pre class="command-line" data-user="user" data-host="host"><code class="language-bash">
      <%- req.curl %>
    </code></pre>
  <%_ } _%>
`;

const response = `<%_ let res = value.response _%>
  <%_ if (res) { _%>
    <h4 class="mt-5">Response [<%- res.status _%>]</h4>

    <p>Body</p>
    <pre><code class="language-json line-numbers">
      <%_ if (res.body) { _%>
      <%- res.body %>
      <%_ } else { _%>
      -
      <% } %>
    </code></pre>
  <%_ } _%>
`;

const template = `---
slug: api-reference/partner-portal/api
searchable: true
metadata:
  title: Partner Portal API
  description: This documentation will help you manage your instances programmatically using Partner Portal REST API.
---

<p>This documentation will help you manage your instances programmatically using Partner Portal REST API.</p>

<%_ for (let name in endpoints) { _%>
  <%_ var examples = endpoints[name] _%>
  <h2><%= name _%></h2>

  <%_ for (let example in examples) { _%>
    <%_ var value = examples[example] _%>
    ${request}
    ${response}
    <hr class="hr mt-5 mb-3 py-2" />
  <%_ } _%>
<%_ } _%>`;

module.exports = template;
