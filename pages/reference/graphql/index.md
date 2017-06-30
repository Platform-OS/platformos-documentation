---
title: GraphQL
permalink: /reference/graphql
---

## What is GraphQL

[GraphQL](http://graphql.org/learn/) is a data query language that use strong type system. A GraphQL query is a string interpreted by a server that returns data in a specified format. Here is an example query:

```js
query get_user($slug: String){
  user(slug: $slug) {
    slug
    email
    first_name
    last_name
    address{
      city
    }
  }
}
```

And here is the response to that query:

```js
{
  "user": {
    "slug": "jane",
    "email": "jane@example.com",
    "first_name": "Jane",
    "last_name": "Doe",
    "address": {
      "city": "Toronto"
    }
  }
}
```

In query you can select exactly what you need.
Editor will show available fields and allow run queries.


## GraphQL in Liquid

You can store queries and use them in liquid with `query_graph` tag.

{% raw %}
```liquid
{% query_graph users_query, result_name: g, slug: 'jane' %}

{{ g.user.first_name }} {{ g.user.last_name }} {{ g.user.address.city }}
```
{% endraw %}
