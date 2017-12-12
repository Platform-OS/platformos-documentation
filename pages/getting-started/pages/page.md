---
title: Pages
permalink: /getting-started/pages/page
---
Page is the fundament of our platform. It allows you to define which content will be shown at given path. All pages have to be located in `/pages` directory. Each page is represented by a single file with extension liquid. Here is a sample file for configuring about page:
{% raw %}
```liquid
---
slug: about
format: html
layout_name: application
path: About Us
---
<h1>About us page</h1>
<p>A paragraph explaining what we do</p>
```
{% endraw %}

* slug - defines the url at which this page will be accessible. In this example, assuming your marketplace domain is https://example.com, you will be able to access the page at https://example.com/about. For homepage use '/' [ which will work both for https://example.com and https://example.com/ ]
* format - Currently two formats are available: html and json. The letter is useful when you make ajax request to the page and want to receive json response, not html.
* layout_name  - defines which layout from `liquid_views/layouts/` you would like to use - defaults to application.
* path - name might be a bit misleading, but currently it is used to generate the default `<title>` tag.

There are other options available - for example, you can create page that redirects somewhere else (useful if you want to rename slug but there are external sources linking to the old slug for example) etc.

Everything after the front matter is the body of the page. Depending on the format, it should be either html or json. In this example, it is simple html consisting of `h1` and `p` tags.

Information provided in this section should be enough to create any number of static pages, implementing any layout you want.
