---
title: Liquid Filters
tags: [liquid, filters]
permalink: /reference/liquid-filters-static/
---

Apart from standard Liquid filters that are [listed and documented in detail here](https://shopify.github.io/liquid/) and [shortly summarized here](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#standard-filters) we added some filters on our own to make your life easier.


## asset_url

Takes a string as an argument and returns a string representing url to this asset served by our CDN.

### Example - file found
{% raw %}
```liquid
{{ 'images/logo.svg' | asset_url }}
```
{% endraw %}

It will return absolute url to the asset
`<CDN URL>/instances/123/assets/images/logo.svg?uploaded=xxxxxxx`

{% include alert/note.html content='As you may have noticed, we are adding timestamp to as a query parameter to the filename - this timestamp is regenerated every time the file content has changed and uploaded to our CDN. When accessing file you don\'t have to add it - you can just as well request the file without `uploaded` parameter, but if you do it is guaranteed to serve the most current file uploaded to your instance S3 bucket.' %}


Please note, that you can nest assets in any number of directories as you want.

In example above file `images/logo.svg` would be placed in `custom_themes/default_custom_theme_assets/images/logo.svg`


### Example - file NOT found
{% raw %}
```liquid
{{ 'fonts/missing.woff' | asset_url }}
```
{% endraw %}

It will return the root directory of the CDN - `<CDN URL>/instances/123/assets/`
