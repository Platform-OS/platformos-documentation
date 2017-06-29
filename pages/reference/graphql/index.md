---
title: GraphQL in Liquid
keywords: graphql liquid
tags:
  - tools
  - marketplace_builder
  - graphl
  - formbuilder
permalink: /reference/graphql
sidebar: reference_sidebar
folder: GraphQL
published: true
---

## GraphQL: in Liquid

What is GraphQL

[GraphQL](http://graphql.org/learn/) is a data query language that use strong type system. A GraphQL query is a string interpreted by a server that returns data in a specified format. Here is an example query:

{
  user(slug: "jane") {
    slug
    email
    first_name
    last_name
    address{
      city
    }
  }
}
And here is the response to that query:

{
  "data": {
    "node": {
      "id": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzk4OTUyODE0NzU=",
      "title": "Arena Zip Boot"
    }
  }
}

 is a language we use to fetch data. It allows to selects exactly what you need.
Editor will show available fields and allow test queries.
You can define queries and use them in liquid with `query_graph` tag.


{% raw %}
```liquid
{% query_graph users_query, result_name: g, current_user: current_user %}
```
{% endraw %}
