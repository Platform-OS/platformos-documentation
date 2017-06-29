---
title: Search for listings
tags:
  - search listing graphql
keywords: null
summary: How to add simple search to your Marketplace
sidebar: getting_started_sidebar
permalink: /getting-started/search/listings
folder: getting_started
layout: page
published: true
---
Requirements: graphql queries, pages, slug, liquid

```js
query demo_search_listings(
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


2. [Add page](/getting_started/add_page)
{% raw %}
```liquid
{% assign query = params.query | default: nil %}

<div class="">
  <div class="results">
    <form action="/demo_search" method="GET">
      {% query_graph 'demo_search_listings', result_name: g,
        query: query,
        state: params.state,
        street: params.street,
        city: params.city,
        is_deleted: false
      %}
      <input name="query" value="{{ query }}" />
      <input type="submit" value="Search" />


      <strong>{{ g.listings.total_entries }}</strong>

      <ul>
      {% for item in g.listings.results %}
        <li>
         {{ item.slug }} - {{ item.name }}
        </li>
      {% endfor %}
      </ul>
    </form>
  </div>
</div>
```
{% endraw %}

3. Head to **/demo_search** and enjoy your search
