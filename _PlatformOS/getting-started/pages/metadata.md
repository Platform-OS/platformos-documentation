---
title: Metadata
permalink: /getting-started/pages/metadata
---

**Metadata** is a property to store any kind of key-value pairs. A page can be extended using `metadata`, for example:

```yaml
---
slug: signup
metadata:
  title: "This it the title"
  description: "A description"
  tags: ["signup", "choose", "landing"]
---
```

## Displaying metadata on the page

Metadata is available through Liquid as `page.metadata`:

{% raw %}

```liquid
<div>
  <h1> {{ page.metadata.title }} </h1>

  <section>{{ page.metadata.description }}</section>

  <ul>
    {% for tag in page.metadata.tags %}
      <li> {{ tag }} </li>
    {% endfor %}
  </ul>

  <strong>
    {{ page.metadata.tags | join: "," }}
  </strong>
</div>
```

{% endraw %}

## Searching for a page using its metadata 

You can search for a page using its metadata in GraphQL queries (all support `page` and `per_page` pagination arguments). Here's an example of a GraphQL query with all possible parameters.

{% raw %}

```graphql
query find_page(
  $page: Int
  $per_page: Int
  $metadata: String
  $exclude: String
  $has_key: String
  $name: String
  $value: String
) {
  pages: pages(
    metadata: $metadata
    page: $page
    per_page: $per_page
    exclude: $exclude
    has_key: $has_key
    name: $name
    value: $value
  ) {
    total_entries

    results {
      id
      slug
      metadata
      format
      page_url
      title
      content
    }
  }
}
```

{% endraw %}

Some examples of using the above query from a Liquid template to find metadata:

* Find pages WITH word `TITLE` somewhere in metadata (in keys or values)

{% raw %}

```liquid
{% execute_query 'find_page', page: 1, per_page: 20, metadata: "TITLE", result_name: 'q' %}
```

{% endraw %}

* Find pages WITHOUT word `TITLE` in metadata (in keys or values)

  {% raw %}

```liquid
{% execute_query 'find_page', exclude: 'true', metadata: "TITLE", result_name: 'q' %}
```

{% endraw %}

* Match pages having top-level key `tags`

{% raw %}

```liquid
{% execute_query 'find_page', has_key: 'tags', result_name: 'q' %}
```

{% endraw %}

* Match pages without "tags" key

{% raw %}

```liquid
{% execute_query 'find_page', exclude: 'true', has_key: 'tags', result_name: 'q' %}
```

{% endraw %}

* Match pages with key `tags` having (or including) value `bar`

{% raw %}

```liquid
{% execute_query 'find_page', name: 'tags', value: 'bar', result_name: 'q' %}
```

{% endraw %}

* Match pages that do not have key `tags` equal (or including) to `bar`

{% raw %}

```liquid
{% execute_query 'find_page', exclude: 'true', name: 'tags', value: 'bar', result_name: 'q' %}
```

{% endraw %}

## Related topics 
* [Pages]()
