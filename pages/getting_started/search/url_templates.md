---
title: SEO friendly URL
tags: [search url seo]
keywords:
summary: "How to make URLs SEO friendly"
sidebar: getting_started_sidebar
permalink: /getting-started/search/url_templates
folder: getting_started
layout: page
---
Requirments: graphql queries, pages, liquid


We want to have listings divided by country, so we will have `/catalogue/Australia/Sydney`, `/catalogue/Spain/Seville`
In order to achieve this we need to define url template.

1. Create Search Page with slug '/catalogue'
2. Define you URL template in page.
{% raw %}
```liquid
{% assign url_template = '/catalogue/{country}/{city}' %}
```
{% endraw %}

3. Decode current_url into params with liquid filter `extract_url_params`
{% raw %}
```liquid
{% assign url_params = current_full_path | extract_url_params: url_template %}
```
{% endraw %}

4. Prepare GraphQL query with county and city.

```js
query get_catalogue_listings(
  $query: String,
  $is_deleted: Boolean = false
  $country: String
  $city: String
) {
  listings(
    query: $query,
    listing: {
      is_deleted: $is_deleted
      address: {
        country: $country
        city: $city
      }
    }
  ) {
    total_entries
    results {
      slug
      name
      address{
        country
        city
      }
    }
  }
}
```

5. Pass decoded params to graphql query.
{% raw %}
```liquid
{% query_graph 'get_catalogue_listings', result_name: g,
  country: url_params.country,
  city: url_params.city,
  is_deleted: false,
%}
```
{% endraw %}


6. Final Page
{% raw %}
```liquid
{% assign url_template = '/catalogue/{country}/{city}' %}
{% assign url_params = current_full_path | extract_url_params: url_template %}

<div class="">
  <div class="results">
    <form action="." method="GET">
      {% query_graph 'demo_search_listings', result_name: g,
        country: url_params.country,
        city: url_params.city,
        is_deleted: false,
      %}

      <strong>{{ g.listings.total_entries }}</strong>
      <ul>
      {% for item in g.listings.results %}
        <li>
         {{ item.slug }} - {{ item.name }} - {{ item.address.country }} - {{ item.address.city }}
        </li>
      {% endfor %}
      </ul>
    </form>
  </div>
</div>
```
{% endraw %}

7. Head to /catalogue/Australia/Melbourne
