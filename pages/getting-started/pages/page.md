---
title: Pages
permalink: /getting-started/pages/page
---

Page is the fundament of our platform. It allows you to define which content will be shown at given path. All pages have to be located in `/pages` directory. Each page is represented by a single file with extension liquid. Here is a sample file for configuring home page:
{% raw %}

## views/pages/home.html.liquid

```liquid
---
slug: /
---
<h1>Welcome to my home page</h1>
<p>A paragraph explaining what we do</p>
```

{% endraw %}

| Property      | Description                                                                                                                                                                                                                                                                                                | Default     | Example          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------- |
| `slug`        | defines the url at which this page will be accessible. Assuming your marketplace domain is https://example.com, you will be able to access the page at https://example.com/`<slug>`. Homepage is exception - for homepage use '/', which will work for both https://example.com and https://example.com/ ] | n/a         | my-page          |
| `format`      | defines for which format the endpoint will be available. For example, if you want to respond to /sitemap.xml, you will specify xml format. Valid formats are: html, xml, csv, txt, json, rss, css, js, pdf.                                                                                                | html        | txt              |
| `layout_name` | defines which layout from `views/layouts/` you would like to use. If you dont want to use any layout, set it to empty string. It will be equivalent to just rendering page content.                                                                                                                        | application | my_custom_layout |

Everything after the front matter is the body of the page.

## Formats

To define for which format the endpoint will be available place the `.<format>` before the file extension.

Examples:

* about-us.html.liquid
* orders.xml.liquid
* users-report.csv.liquid
* coordinates.json.liquid
* feed.rss.liquid
* datepicker.css.liquid
* server-constants.js.liquid
* purchase-order.pdf.liquid

## Accessing different formats

You can have multiple pages with the same slug, but with different formats and access them at the same time.

For example you can have both `html`, `pdf` and `txt` version of a page with `Hello world`:

{% raw %}

### views/pages/hello.html.liquid

```liquid
---
slug: hello
---
Hello world
```

{% endraw %}

{% raw %}

### views/pages/hello.pdf.liquid

```liquid
---
slug: hello
---
Hello world
```

{% endraw %}

### views/pages/hello.txt.liquid

```liquid
---
slug: hello
---
Hello world
```

{% endraw %}

Those will be accessible under urls:

https://example.com/hello
https://example.com/hello.pdf
https://example.com/hello.txt

Note that html format is implicit, default, you dont need to specify it in the url.

### Redirects

See [Redirects](./redirects) to redirect user to a different page.
