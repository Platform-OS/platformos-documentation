---
title: Point in shape
permalink: /guides/searching-by-location/point-in-shape
---

`Point in shape` returns transactables that have `service_radius` that is overlapping point.

`service_radius` is an custom attribute in form of string defined on transactable. 

This is the simplest way to set it up on:
```yml
- name: service_radius
  attribute_type: string
  label: Distance prepared to travel
```

For example you want to know restaurants that will deliver food to your office - you would want to use this type of search. Different restaurants have different distance they want to deliver to - this search is going through all transactables in the area and returns those that defined big enough shape to cover your request. 

If transactable does not have `location` object with `latitude` and `longitude` it will automatically try to fall back to the transactable owner `current_address`.

* center - GeoPoint - point that you are interested (`Point` on the illustration)

## Visualization

Illustration below explains how `Provider 1` and `Provider 2` will be included in the results with their `service_radius` setup and `Provider 3` will not.

{: .width-three-quaters}
![Point in shape illustration](/assets/images/guides/searching-by-location/point-in-shape.svg)

## Query
```graphql
query get_providers {
  listings(
    geo_query: {
      point_in_shape: {
        point: {
          lat:-27.4
          lng: 153
        }
      }
    }
    listing: {
      has_creator: true
      is_deleted: false
    }
  ) {
    results {
      service_radius: property(name: "service_radius")
      creator {
        current_address {
          lat
          lng
        }
      }
    }
  }
}
```

{% include alert/note.html content="`has_creator: true` has to be set to let our system know that we will be needing (in this case just to prove a point that the coordinates are in fact close enough) data from the transactable creator database." %}

## Response with results
```js
{
  "data": {
    "listings": {
      "results": [
        {
          "service_radius": "20",
          "creator": {
            "current_address": {
              "lat": -27.2439922,
              "lng": 153.0278753
            }
          }
        },
        {
          "service_radius": "50",
          "creator": {
            "current_address": {
              "lat": -27.0812781,
              "lng": 152.973874
            }
          }
        }
      ]
    }
  }
}
```

<!-- TODO: Implement service radius to include distance units -->

Those providers are close enough (`20` and `50` - in this case miles) to the given point.

### Empty results

If I change coordinates of Point that I am interested in to `{ lat: -50.4, lng: 153 }`

Server will return an empty collection because this point is not within `service_radius` of any transactable/user. 

```js
{
  "data": {
    "listings": {
      "results": []
    }
  }
}
```

## Future

This feature may change in the future.

* `service_radius` will accept string with units (ie. `20km`, `20mi`). See all available [distance units](/reference/search/distance-units).



