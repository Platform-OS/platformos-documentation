---
title: GraphQL in Liquid
keywords: graphql liquid
tags: [tools marketplace_builder graphl formbuilder]
permalink: /reference/graphql
sidebar: reference_sidebar
folder: GraphQL
---

## GraphQL: in Liquid

[GraphQL](http://graphql.org/learn/) can be executed on liquid with `query_graph` tag.

{% raw %}
```liquid
{% query_graph users_query, result_name: g, current_user: current_user %}
{{ g }}
```
{% endraw %}
