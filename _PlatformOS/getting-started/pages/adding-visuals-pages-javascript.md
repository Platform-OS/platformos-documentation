---
title: Adding Visuals to Pages: Javascript
permalink: /get-started/pages/adding-visuals-pages-javascript
---
This guide will help you add visuals (images) to your pages using Javascript. 

## Requirements
To follow the steps in this tutorial, you should be familiar with the required directory structure for your code base, and understand the concepts of pages, layouts, and assets. The example in this tutorial modifies the layout `application.liquid` used in the previous tutorial. 

* [Required Directory Structure]()
* [Pages]()
* [Layouts]()
* [Assets]()
* [Adding Visuals to Pages: Liquid]() (previous tutorial) 

## Steps 

Adding visuals to your pages using Javascript is a three-step process:

1. Prepare an image
2. Add Javascript to your layout 
3. Check page source

### Step 1: Prepare an image
Put an image into the `marketplace_builder/assets/images` directory, e.g. logo.svg. 

### Step 2: Add Javascript to your layout

Add a piece of script that will console log the image URL. This would normally be your plugin loaded at the end of the page, or on the jQuery ready event after the HTML has loaded. 

You can pass the URL of the asset (image) using the `data` attribute and the `asset_url` filter, that takes a string as an argument, and returns a string representing the URL to this asset served by our CDN.  

You can also do it inline in `script` placing the image URL into a global variable or object—and of course you can still use the `asset_url` filter. 


{% raw %}

```liquid
<!doctype html>
<html>
<body>
   <div class="logo" data-image="{{ 'images/logo.svg' | asset_url }}"></div> 
   <script>
      var imageUrl = "{{ 'images/logo.svg' | asset_url }}";
      console.log('Image: ', imageUrl);
   </script>
</body>
</html>

```

{% endraw %}

Sync or deploy. 

### Step 3: Check page source

Check the source code of your page. You should see that both `data-image` and the `imageUrl` variable have the correct URL of the image on the CDN.  

## Next steps
Congratulations! You have learned how to add an image to your pages using Javascript. You can also learn about adding visuals to your pages using CSS or Liquid. 

* [Adding Visuals to Your Pages: CSS]()
* [Adding Visuals to Your Pages: Liquid]()

## Questions?

We are always happy to help with any questions you may have. Consult our  [documentation](), [contact support](), or  [connect with our sales team](). 
