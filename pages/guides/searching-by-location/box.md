---
title: Box
permalink: /guides/searching-by-location/box
---

Box is a variant of search that accepts 4 arguments to define a rectangle that will create a bounding box.

Instead of passing both coordinates points you pass only:

* For Top and Bottom points you pass `lat`

* For Left and Right points you pass `lng`

Server will automatically determine the corners of bounding box and return appropriate results.

## Query

```graphql
query search_users {
  people(geo_query: { box: { top: 45, left: -74, bottom: 40, right: -71 } }) {
    results {
      first_name
      current_address {
        lat
        lng
      }
    }
  }
}
```

### Response

When I ran this query in our WYSIWYG editor two users came in the response:

```js
{
  "data": {
    "people": {
      "results": [
        {
          "first_name": "Pawel",
          "current_address": {
            "lat": 42.4307424,
            "lng": -71.2079389
          }
        },
        {
          "first_name": "Steve",
          "current_address": {
            "lat": 42.4307424,
            "lng": -71.2079389
          }
        }
      ]
    }
  }
}
```
