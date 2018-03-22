---
title: Web Assets
permalink: /getting-started/pages/adding-web-assets
---

What would be a website without static assets like css, images or javascript. In our platform, all assets are connected with abstraction called Custom Theme.

## Uploading Assets

To upload your first assets, you need to copy it into the `assets` directory. For example, you can create css file, like: `assets/app.css`. The example content could look like:
{% raw %}

```css
body {
  background-color: #689dff;
}
```

{% endraw %}

And that is all you need to do. You can do the same with javascript and images. Please note, that you can use any pre-processors or post-processors you want. You can keep all of your `scss` file outside of `marketplace_builder` this directory, for example in `src`, and just copy the end result css file to `marketplace_builder/assets/` directory.

## Using assets in Liquid

To access files put into `assets/` use [asset_url](/reference/liquid-filters#asset_url) filter in any liquid view/layout/page you want. Using our css file as example, you could do:

{% raw %}

```html
# layouts/application.html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="{{ 'app.css' | asset_url }}">
  </head>
  <body>
    {{ content_for_layout }}
  </body>
</html>
```

{% endraw %}
