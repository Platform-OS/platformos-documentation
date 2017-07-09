---
title: Layouts
permalink: /getting-started/pages/layouts
---
Without the layout, each single page would need to share a lot of duplicated code. Changing anything would be very time consuming and error prone. By using layouts, one can extract the common elements of many pages to one place. Usually, layout is the very first thing one wants to develop.

All layouts should be located in `liquid_views/layouts` directory. By default, all Pages use layout called `application`, however you can create as many layouts as needed and decide which page uses which layout. This is why the very first layout should be named `liquid_views/layouts/application.liquid`. At minimum, the content of the layout would look like this:
{% raw %}
```liquid
<!doctype html>
<html lang="en">
<head>
  <!-- here come things like meta tags, favicon, css etc. -->
</head>

<body>
  <header>here usually come header, navbar etc.</header>

  <main>
    {{ content_for_layout }}
  </main>

  <footer>
    here usually come footer, js etc.
  </footer>
</body>
</html>
```
{% endraw %}

The most important thing in every layout file is {%raw%}`{{ content_for_layout }}`{%endraw%} line. What it does is it injects the content of the page. If you have done everything correctly, you should be able to still see the content of the home page created in the previous step. The improvement is, that now it will also contain header and footer - in a form of a simple text for now, but we are going to improve it in the next sessions.
