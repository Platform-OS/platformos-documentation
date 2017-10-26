---
title: Bounding box
permalink: /guides/searching-by-location/bounding-box
---

Bounding box is a rectangle defined by coordinates of two extreme points.

You can choose which ones do you want to use, in this guide we will be using `NorthEast` (later called `top right`) and `SouthWest` (later called `bottom left`). Google Maps JS API returns them by default using `.getBounds()` method.

Points are consisting of GeoPoint type, which is basically an hash with `lat` and `lng` keys.

{% include alert/note.html content="Of course you can use the opposite points, which are called `top_left` and `bottom_right` in our system." %}

### Query

```graphql
query search_users_by_bounding_box(
  $per_page: Int = 20
  $page: Int = 1
  $query: String
  $top_right: GeoPoint
  $bottom_left: GeoPoint
) {
  users: people(
    per_page: $per_page
    page: $page
    query: { keyword: $query }
    geo_query: {
      box_top_right_bottom_left: {
        top_right: $top_right,
        bottom_left: $bottom_left
      }
    }
  ) {
    results {
      id
      first_name
      coordinates: current_address {
        latitude
        longitude
      }
    }
  }
}
```

Having query we can execute it with some arguments pulling users that have their location saved in `current_address` within the asked bounding box. 

### Page
{% raw %}
```liquid
---
slug: search/users/map
format: json
layout_name: false
name: Search On Map
---

{% query_graph 'search_users_by_bounding_box', result_name: g,
  top_right: params.ne,
  bottom_left: params.sw
%}

{% if g.users.results %}{{ g.users.results | json }}{% else %}[{}]{% endif %}
```
{% endraw %}

Couple of notes of whats going on in this page:
1. `layout_name: false` means that content in side will not be rendered inside any layout. Very useful when you are constructing for example JSON response in liquid like we do in this case
2. `format: json` sets proper content headers and allows browser to understand response type correctly
3. Last line is returning results parsed by `json` filter or returns an empty collection to prevent throwing errors. You can handle them however you want to.

### Results

To continue our example, we are going to use jQuery AJAX request to ask for the users within the box that is containing west side of the US, including Jacek that is located in San Francisco.

GET request is sent with bounding box points coordinates:

#### Request
```js
{
  ne: {
    lat: 59.17324480195229
    lng: -94.48281250000002
  },
  sw: {
    lat: 12.20606185258179
    lng: 178.68124999999998
  }
}
```

#### Response
```js
[{
  "id": "133737",
  "name": "Jacek",
  "coordinates": {
    "latitude": 37.7898112,
    "longitude": -122.3884296
  }
}]
```

Because other users are outside of the bounding box we provided, only Jacek came back.
