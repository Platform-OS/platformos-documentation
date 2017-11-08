---
title: Radius
permalink: /guides/searching-by-location/radius
---

Searching by radius takes two arguments:

* center - GeoPoint - point around you want to search
* radius - String - ie. `300mi`, `100km`, `1500m` - max distance of users returned from center point 

See all available [distance units](/reference/search/distance-units).

## Query 
```graphql
query search_users {
  people(
    geo_query: {
      radius: {
        center: {
          lat: 42
          lng: -71
        },
        radius: "300mi"
      }
    }
  ) {
    results {
      current_address {
        lat
        lng
      }
    }
  }
}
```

### Response

In result I received following response in WYSIWYG editor:

```js
{
  "data": {
    "people": {
      "results": [
        {
          "current_address": {
            "lat": 42.4307424,
            "lng": -71.2079389
          }
        },
        {
          "current_address": {
            "lat": 39.9796875,
            "lng": -74.0672505
          }
        },
        {
          "current_address": {
            "lat": 40.739507,
            "lng": -73.9994132
          }
        }
      ]
    }
  }
}
```

But when I made radius only `30mi` results were empty.

```js
{
  "data": {
    "people": {
      "results": []
    }
  }
}
```
