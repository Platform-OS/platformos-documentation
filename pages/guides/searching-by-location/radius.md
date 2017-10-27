---
title: Radius
permalink: /guides/searching-by-location/radius
---

Sometimes users might provide their services in given distance from their location - you might want to 

Searching by radius takes two arguments:

* center - GeoPoint
* radius - String - ie. `300mi`, `100km`, `1500m`

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

### Distance units

Distance units at your disposal:

| Mile          | `mi` or `miles`                |
| Yard          | `yd` or `yards`                |
| Feet          | `ft` or `feet`                 |
| Kilometer     | `km` or `kilometers`           |
| Meter         | `m` or `meters`                |
| Nautical mile | `NM`, `nmi` or `nauticalmiles` |
