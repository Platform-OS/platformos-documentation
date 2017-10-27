---
title: Bounding box
permalink: /guides/searching-by-location/bounding-box
---

Bounding box is a rectangle defined by coordinates of two extreme points.

You can choose which ones do you want to use, in this guide we will be using `NorthEast` (later called `top right`) and `SouthWest` (later called `bottom left`). Google Maps JS API returns them by default using `.getBounds()` method.

Points are consisting of GeoPoint type, which is basically an hash with `lat` and `lng` keys.

{% include alert/note.html content="You can also use the opposite points, which are called `top_left` and `bottom_right` in our system." %}

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
3. Last line is returns results parsed by `json` filter *or* an empty collection if there are no results to return.

### Results
To retrieve data we are going to use get request to ask for the users within the box that is containing west side of the US, including Jacek that is located in San Francisco.
Slug of the page is `search/users/map` so correct request url is `http://example.com/search/users/map.json`

{% include alert/note.html content="`.json` at the end of the url is dictated by `format: json` in page definition." %}

#### Browser GET request
GET request will look similar to:
```
https://example.com/search/users/map.json?ne%5Blat%5D=59.17324480195229&ne%5Blng%5D=-94.48281250000002&sw%5Blat%5D=12.20606185258179&sw%5Blng%5D=178.68124999999998
```

If we parse it to JSON format for readability purposes it becomes:
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

#### Server response
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

Because other users are outside of the bounding box we provided, only Jacek came back in the response.

### Excercise
1. Create couple users with their current address coordinates - make them in different cities 
2. Create a page that will have a form on the page that contains 4 text inputs that will take coordinates of bounding box points
3. Make the response page to return only users with their location within the bounding box 
  * If you want to, make the page return JSON as shown in the example

### Notes

If you want to receive all the results for whatever reason, you can pass empty `geo_query` hash - points will become optional and filter will not affect results at all.

If you need help determining coordinates of a point try one of those:
1. open [mapcoordinates.net](http://www.mapcoordinates.net/en) and type location that you want to find
2. open [Google Maps](https://maps.google.com) and click on a point you want to know coordinates of - a box should appear on the bottom of the page with coordinates inside
