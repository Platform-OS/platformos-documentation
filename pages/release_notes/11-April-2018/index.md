---
title: April 11, 2018 — Release Notes
permalink: /release-notes/11-April-2018/
---

We received signals from developers that it would be nice to have an easy way of retrieving data from Platform OS from both mobile applications and external web aplications.

## What's new

### Based on community feedback:

* **New format: js**: We have added `format: js` to the list of available formats - [see updated docs](/getting-started/pages/page).

This change allows you to create page that will respond with `Content-Type: application/javascript` header, which means it can contain [JSONP](https://www.sitepoint.com/jsonp-examples/) content.

{% include alert/note.html content="Security of user data is very important to us, so before we come up with the best solution on the market, we provide standard JSONP solution." %}
