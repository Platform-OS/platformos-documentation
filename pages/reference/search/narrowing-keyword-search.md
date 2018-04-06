---
title: Narrowing keyword search
permalink: /reference/search/narrowing-keyword-search
---

By default keyword search is looking in all fields that are provided to the database.

In your graphql query you can decide which fields should be search in.

If you leave the `keyword` field empty, it means you are looking for everything, so narrowing by field names will not be applied.

## Operator

Operator allows you to control how the query will be understood by our search engine.

For Example query: `capital of hungary` (subqueries: `capital`, `of`, `Hungary`)

With operator set to `OR`, it will be translated to `capital OR of OR Hungary` and will return results that have _any_ of those subqueries.

With operator set to `AND`, it will be translated to `capital AND of AND Hungary` and will return results containing _all_ of those subqueries.

Default value is `AND`.

{% include alert/note.html content="Operator is applied only to the keyword query. It does not affect fields behavior." %}

### AND Example

```graphql
query get_owners {
  people(query: { keyword: "Tanya Rose", operator: "AND" }) {
    results {
      first_name
      last_name
    }
  }
}
```

```json
{
  "data": {
    "people": {
      "results": [
        {
          "first_name": "Tanya",
          "last_name": "Rose"
        }
      ]
    }
  }
}
```

### OR Example

```graphql
query get_owners {
  people(query: { keyword: "Tanya Rose", operator: "OR" }) {
    results {
      first_name
      last_name
    }
  }
}
```

```json
{
  "data": {
    "people": {
      "results": [
        {
          "first_name": "Rose",
          "last_name": "Smith"
        },
        {
          "first_name": "Maya-Rose",
          "last_name": "Chauhan"
        }
      ]
    }
  }
}
```

## Filtered fields

To learn more about filtered fields see [selecting fields for search](./selecting-fields-for-search) section.

### OR with filtered fields example

```graphql
query get_providers {
  people(
    query: {
      keyword: "Tanya Rose"
      operator: "OR"
      fields: [{ name: "last_name" }]
    }
  ) {
    results {
      first_name
      last_name
    }
  }
}
```

```json
{
  "data": {
    "people": {
      "results": [
        {
          "first_name": "Helena",
          "last_name": "Rose"
        },
        {
          "first_name": "Tanya",
          "last_name": "Rose"
        },
        {
          "first_name": "Annette",
          "last_name": "Rose"
        },
        {
          "first_name": "Alba",
          "last_name": "Spirli-Rose"
        }
      ]
    }
  }
}
```

### AND with filtered fields example

```graphql
query get_providers {
  people(
    query: {
      keyword: "Tanya Rose"
      operator: "AND"
      fields: [{ name: "last_name" }, { name: "first_name" }]
    }
  ) {
    results {
      first_name
      last_name
    }
  }
}
```

Because above query is asking for users that have "Tanya Rose" in `first_name` or `last_name` results will be empty in this case.

```json
{
  "data": {
    "people": {
      "results": []
    }
  }
}
```

There are no users with "Tanya Rose" in `first_name` field or `last_name` field.

## Priority

While defining which fields should be traversed in keyword search you can also force the priority of each field to make sure they will appear in results higher (they will have higher `score`).

[//]: <> TODO: Explain better. This is basically abstraction on top of `boost` property in ElasticSearch

[//]: <> ### Example
[//]: <> TODO

## Future

We might implement a switch that will allow user to decide if the search query should be case sensitive.
