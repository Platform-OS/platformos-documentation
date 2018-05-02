---
title: Adding Visuals to Pages: Liquid
permalink: /get-started/pages/adding-visuals-pages-liquid
---
This guide will help you add visuals (images) to your pages using a Liquid page with the format CSS.  

## Requirements
To follow the steps in this tutorial, you should be familiar with the required directory structure for your code base, understand the concepts of pages, layouts, and assets, and know how to create a page.  

* [Required Directory Structure]()
* [Pages]()
* [Layouts]()
* [Assets]()
* [Creating a Page]()

## Steps 

Adding visuals to your pages using Liquid is a three-step process:

1. Prepare an image
2. Create page `logo.css.liquid`
3. Link to the `logo.css.liquid` page in your layout

### Step 1: Prepare an image
Put an image into the `marketplace_builder/assets/images` directory, e.g. logo.svg. 

### Step 2: Create page `logo.css.liquid`

Create a page with the format CSS in your `marketplace_builder/pages` directory named `logo.css.liquid`: 

{% raw %}

```liquid
---
slug: logo
format: css
---

.logo {
   background-image: url({{ 'images/logo.svg' | asset_url }});

}
```

{% endraw %}

Because assets are placed on a CDN, you use the `{{ asset_url }}` helper to get the path of the image. You can't use a relative path, because the path would be relative to the URL of your Instance, not the asset URL on the CDN. 

### Step 3: Link to the `logo.css.liquid` page in your layout

{% raw %}

```liquid
<!doctype html>
<html>
<body>
   <head>
      <link rel="stylesheet" href="/logo.css"> 
   </head>

<div class="logo"></div>

</body>
</html>

```

{% endraw %}

Sync or deploy. You should see the image displayed on your page. 

## Next steps
Congratulations! You have learned how to add an image to your pages using Liquid. You can also learn about adding visuals to your pages using CSS or Javascript. 

* [Adding Visuals to Your Pages: CSS]()
* [Adding Visuals to Your Pages: Javascript]()

## Questions?

We are always happy to help with any questions you may have. Consult our  [documentation](), [contact support](), or  [connect with our sales team](). 
