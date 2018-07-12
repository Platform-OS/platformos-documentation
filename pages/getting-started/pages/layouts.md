---
title: Layouts
permalink: /getting-started/pages/layouts
---
Without the layout, each single page would need to share a lot of duplicated code. Changing anything would be very time consuming and error prone. By using layouts, one can extract the common elements of many pages to one place. Usually, layout is the very first thing one wants to develop.

## Placement

All layouts should be located in `views/layouts` directory. By default, all Pages use layout called `application`, however you can create as many layouts as needed and decide which page uses which layout. This is why the very first layout should be named `views/layouts/application.html.liquid`.

## Minimal example

At minimum, the content of the layout would look like this:

{% raw %}

```liquid
{{ content_for_layout }}
```

{% endraw %}

This layout will just render content of the page and it is equivalent of passing `layout_name: ''` in the page definition.

## Usual example

Most common use case of layout is to actually place something before and after content of the page:

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

### Layouts for different formats

If you want to have layout for your non-html pages, just put `.<format>` before the file extension.

Examples:

* document.pdf.liquid
* document.csv.liquid
* layout.xml.liquid
* email.txt.liquid
* email.html.liquid

In the page `my-example-page.pdf.liquid` you will put `layout_name: document` and it will recognize which layout to use (the same as format of the page).

### Rendering page content in layout

The most important thing in every layout file is {%raw%}`{{ content_for_layout }}`{%endraw%} line. What it does is it injects the content of the page. If you have done everything correctly, you should be able to still see the content of the home page created in the previous step. The improvement is, that now it will also contain header and footer - in a form of a simple text for now, but we are going to improve it in the next sessions.
