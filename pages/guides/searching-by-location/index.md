---
title: Searching by location
permalink: /guides/searching-by-location/
---

If you gather information about your user's location you can easily search them using one of following methods:

1. [Bounding box](/guides/searching-by-location/bounding-box) - passing coordinates of two points, ie. `top left` and `bottom right` - this can be used to find users that are within visible rectangle of the map showing the results

2. [Radius](/guides/searching-by-location/radius) - passing coordinates of the center point and radius - this can be used to find users that are close enough to provide a service

3. Polygon - passing coordinates of as many points as you want - this can be used to trace state, neighbourhood, district. 

4. Box - simplified variant of passing extreme coordinates of points that will ultimately create a bounding box after calculation
