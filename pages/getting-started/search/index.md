---
title: Search
permalink: /getting-started/search/
---

Search does not really differ from any other graphql query.

It is usually more complex, because of many number of additional filters that user can choose, but that's it. You can build search for any object supported in GraphQL - most common choices are Users and Transactables. A minimum example of graphql query to find all not deleted transactables could look like:

```graphql
query demo_search_transactables($query: String, $is_deleted: Boolean = false) {
  listings(query: $query, listing: { is_deleted: $is_deleted }) {
    total_entries
    results {
      slug
      name
    }
  }
}
```

{% include alert/note.html content="By default server is not returning deleted records. We just use it as an example of argument that can be overridden." %}

Above graphql consists of three main sections:

1.  Query arguments - usually passed from the liquid to parametrize your query. In example below, `$query: String`. Defines what will be used in the filters section and what is the data type of passed argument. It is also possible to set default value for any given argument - default value will be used if it is not passed to the execute query tag

2.  Filters - used to filter down the results by given arguments. In above example listings are filtered so they only contain results with `is_deleted` flag set to `false`. If you pass `true` in `$is_deleted` it will do the opposite

3.  Results - just like in any other query, defines which data you want to receive and in what form

Query described above can be used to display all transactables that are not deleted. In this case we are going to pull out slug and name of those transactables into the unordered list.

{% include alert/important.html content="`$query` that is passed through the form to the server will be passed to the graphql. It is a fuzzysearch and by default it will filter results by every attribute there is." %}

{% raw %}

```liquid
---
slug: demo_search
---
{% assign query = params.query | default: nil %}
<form action="/demo_search" method="GET">
  {% query_graph 'demo_search_transactables',
    result_name: 'g',
    query: query
  %}
  <input name="query" value="{{ query }}" />
  <input type="submit" value="Search" />
</form>

<p>Total: <strong>{{ g.listings.total_entries }}</strong></p>

<ul>
{% for listing in g.listings.results %}
  <li>{{ listing.slug }} - {{ listing.name }}</li>
{% endfor %}
</ul>
```

{% endraw %}

{% include alert/note.html content="Because we have set `is_deleted` default value to `false` in the query, passing false is unnecessary." %}
