---
title: Selecting fields for search
permalink: /reference/search/selecting-fields-for-search
---

Sometimes you want to create very specific search.

For example you want to give your users ability to search through users but only using their `first_name`.

## Profile fields

```graphql
query get_owners {
  people(query: { keyword: "John", fields: [{ name: "first_name" }] }) {
    results {
      first_name
    }
  }
}
```

Returns users that have `first_name` exactly `John`.

## Custom attributes

```graphql
query get_providers {
  listings(
    query: { keyword: "20", fields: [{ name: "properties.service_radius" }] }
  ) {
    results {
      service_radius: property(name: "service_radius")
    }
  }
}
```

Gets all transactables that custom attribute `service_radius` equals `20`. It is exact search, but it is not case sensitive.
