---
title: Search
permalink: /getting-started/search/
---
Search does not really differ from any other graphql query. It is usually more complex, because of many number of additional filters that user can choose, but that's it. You can build search for any object supported in GraphQL - most common choices are Users and Transactables. A minimum example of graphql query to find all not deleted transactables could look like:

```graphql
query demo_search_transactables(
  $query: String,
  $is_deleted: Boolean = false
) {
  listings(
    query: $query,
    listing: {
      is_deleted: $is_deleted
    }
  ) {
    total_entries
    results {
      slug
      name
    }
  }
}
```

Example page which could use this graphql query to render name and slug of all transactables:

{% raw %}
```liquid
---
slug: demo_search
format: html
layout_name: application
name: Demo Search
---
{% assign query = params.query | default: nil %}
<form action="/demo_search" method="GET">
  {% query_graph 'demo_search_transactables', result_name: g,
    query: query,
    is_deleted: false
  %}
  <input name="query" value="{{ query }}" />
  <input type="submit" value="Search" />
</form>

<p>Total: <strong>{{ g.listings.total_entries }}</strong></p>

<ul>
{% for item in g.listings.results %}
  <li>{{ item.slug }} - {{ item.name }}</li>
{% endfor %}
</ul>
```
{% endraw %}
