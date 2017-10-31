---
title: Narrowing keyword search
permalink: /guides/searching-by-location/narrowing-keyword-search
---

By default keyword search is looking in all fields that are provided to the database.

In your graphql query you can decide which fields should be taken into consideration.

If you leave the `keyword` field empty, it means you are looking for everything, so narrowing by field names will not be applied.


## Custom attributes
```graphql
query get_providers {
  listings(
    query: {
      keyword: "20"
      fields: [{
        name: "properties.service_radius"
      }]
    }
  ) {
    
    results {
      service_radius: property(name: "service_radius")
    }
  }
}
```

Gets all transactables that custom attribute `service_radius` equals `20`. It is exact search, but it is not case sensitive.

## Profile fields
```graphql
query get_providers {
  listings(
    query: {
      keyword: "John"
      fields: [{
        name: "first_name"
      }]
    }
  ) {
    
    results {
      first_name
    }
  }
}
```

Returns all `John`s.

## Operator
TODO

```
default_operator

The default operator used if no explicit operator is specified. For example, with a default operator of OR, the query capital of Hungary is translated to capital OR of OR Hungary, and with default operator of AND, the same query is translated to capital AND of AND Hungary. The default value is OR.
```

## Priority

While defining which fields should be traversed in keyword search you can also force the priority of each field to make sure they will appear in results higher (they will have higher `score`).

### Example
TODO


## Future

We might implement a switch that will allow user to decide if the search query should be case sensitive.
