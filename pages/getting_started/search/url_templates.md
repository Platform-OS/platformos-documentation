---
title: SEO friendly URL
tags:
  - search url seo
keywords: null
summary: How to make URLs SEO friendly
sidebar: getting_started_sidebar
permalink: /getting-started/search/url_templates
folder: getting_started
layout: page
published: true
---
    Requirments: graphql queries, pages, liquid


We want to have listings divided by country, so we will have 

**/catalogue/Australia/Sydney**

**/catalogue/Spain/Seville**

In order to achieve this we need to define url template.

## Create Search Page with slug '/catalogue'

## Define you URL template in page.

{% raw %}
```liquid
{% assign url_template = '/catalogue/{country}/{city}' %}
```
{% endraw %}

## Decode current_url into params with liquid filter `extract_url_params`

{% raw %}
```liquid
{% assign url_params = current_full_path | extract_url_params: url_template %}
```
{% endraw %}

## Prepare GraphQL query with county and city.

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

## Pass decoded params to graphql query.

{% raw %}
```liquid
{% query_graph 'get_catalogue_listings', result_name: g,
  country: url_params.country,
  city: url_params.city,
  is_deleted: false,
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

## Example urls:

/catalogue/Australia/Melbourne - listings from Melbourne Australia

/catalogue//Sydney - listing from Sydney

/catalogue// - all listings
