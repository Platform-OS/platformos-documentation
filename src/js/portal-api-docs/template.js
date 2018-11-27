const request = `<%_ let req = value.request _%>
  <%_ if (req) { _%>
    <h3>Request</h3>
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
    <h3 class="mt-5">Response [<%- res.status _%>]</h3>

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

const template = `<%_ for (let name in endpoints) { _%>
  <%_ let examples = endpoints[name] _%>
  <h2><%= name _%></h2>

  <%_ for (let example in examples) { _%>
    <%_ let value = examples[example] _%>
    ${request}
    ${response}
    <hr class="hr mt-5 mb-3 py-2" />
  <%_ } _%>
<%_ } _%>`;

module.exports = template;
