---
title: Web Assets
permalink: /getting-started/pages/adding-web-assets
---
What would be a website without static assets like css, images or javascript. In our platform, all assets are connected with abstraction called Custom Theme.

## Custom Theme

To upload your first assets, you need to create custom theme first. You can do it by creating configuration file called `custom_themes/default.yml` with following content:

{% raw %}
```yaml
---
name: Default
in_use: true
---
```
{% endraw %}

It will create a Custom Theme named 'Default'. You most likely will not need any more custom themes anytime soon. By configuring `in_use: true` you are making this custom theme active. At any given time, you can have only one active custom theme. You will have access only to assets associated with active custom theme. You are associating assets with custom theme by copying them into `custom_themes/<name>_custom_theme_assets` directory. In this example, the full path will be `custom_themes/default_custom_theme_assets/`.

## Uploading Assets
Now you can create your first css file, for example: `custom_themes/default_custom_theme_assets/app.css`. The example content could look like:
{% raw %}
```css
body {
  background-color: #689dff;
}
```
{% endraw %}

And that is all you need to do. You can do the same with javascript and images. Please note, that you can use any pre-processors or post-processors you want. You can keep all of your `scss` file outside of `marketplace_kit` this directory, for example in `src`, and just copy the end result css file to `custom_themes/default_custom_theme_assets/`.

## Using assets in Liquid

In every liquid view you have access to a hash named `asset_url`. They key is always the file name and the value is a final url to the actual asset. Because it is a simple hash, you can render it, for debugging purposes for example, by adding {{ asset_url }} for example to application.liquid:

{% raw %}
```liquid
...
  <header>here usually come header, navbar etc.. Assets: {{ asset_url }}</header>
...
```
{% endraw %}

It should render something like `Assets: {"app.css"=>"https://<dynamically created url to cdn>/app.css"}`. If you have basic knowledge of working with hash in liquid, you already realized, that adding this css file to your layout would be as simple as editing `application.liquid` to include this code:

{% raw %}
```liquid
...
<head>
  <link rel="stylesheet" media="screen" href="{{ asset_url['app.css'] }}">
</head>
...
```
{% endraw %}

After refreshing the page, you should see that the background color has changed.

Please note, that you can nest assets in any number of directories as you want. For example, you can put the app.css file to `custom_themes/default_custom_theme_assets/css/app.css`. You would then access it via `asset_url['css/app.css']`.
