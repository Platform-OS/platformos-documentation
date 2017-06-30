---
title: SEO friendly URL
tags:
  - search
  - url
  - seo
keywords: null
summary: How to make URLs SEO friendly
sidebar: getting_started_sidebar
permalink: /getting-started/search/url-templates
folder: getting_started
layout: page
published: true
---
    Requirments: graphql queries, pages, liquid, html


We want to have listings divided by country, so we will have 

**/catalogue/Australia/Sydney**

**/catalogue/Spain/Seville**

## Setup page 

- create Search Page with slug `catalogue`

- define URL template in page.

{% raw %}
```liquid
{% assign url_template = '/catalogue/{country}/{city}' %}
```
{% endraw %}

- decode current_url into params with liquid filter `extract_url_params`

{% raw %}
```liquid
{% assign url_params = current_full_path | extract_url_params: url_template %}
```
{% endraw %}

## Prepare GraphQL query with country and city

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

## Add GraphQL query to your page

- and pass extracted params to it

{% raw %}
```liquid
{% query_graph 'get_catalogue_listings', result_name: g,
  country: url_params.country,
  city: url_params.city,
  is_deleted: false
%}
```
{% endraw %}


## Final Page

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
        is_deleted: false
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

## Example URLs

**/catalogue/Australia/Melbourne** - listings from Melbourne Australia

**/catalogue//Sydney** - listing from Sydney

**/catalogue//** - all listings
