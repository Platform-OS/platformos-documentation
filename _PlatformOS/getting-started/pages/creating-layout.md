---
title: Creating a Layout
permalink: /get-started/pages/creating-layout
---
This guide will help you create a Layout.  

## Requirements
So that you can follow the steps in this tutorial, you have to have the Marketplace Kit installed, an environment configured, and the required directory structure set up (or at least have a `marketplace_builder` directory). You should also understand the concept behind Layouts. 

* [Quickstart Guide]() or [Setup tutorials](): help you get access to our platform, set up a site, install the Marketplace Kit, set up the required directory structure, and deploy to your site.    
* [Layouts](): explains what Layouts are and how to use them. 

## Steps 

Creating a Layout is a three-step process:

1. Create a directory for Layouts
2. Create a Layout file
3. Edit the Layout file 

### Step 1: Create a directory for Layouts
In order to correctly communicate with the Platform OS engine and API, your code base should be organized into a specific directory structure. The root directory of your project should contain the `marketplace_builder` directory, and Layouts should be placed into the `views/layouts` directory inside `marketplace_builder`. 

If you are starting from scratch (without having created the required directory structure), create a `views` directory inside `marketplace_builder`, then a `layouts` directory inside `views`.

If you have already installed the required directory structure, you can skip this step, and just locate your `marketplace_builder/views/layouts` directory. 

### Step 2: Create a Layout file
In the `layouts` directory, create a Liquid file called `application.liquid`. 

### Step 3: Edit the Layout file 
Edit the `application.liquid` Layout file. 

See a sample Layout file with explanations below:

{% raw %}

```liquid
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Layout title</title>
</head>

<body>
<h1>Layout</h1>
{{ content_for_layout }}

</body>

</html>

```

{% endraw %}


The special variable `{{ content_for_layout }}` renders the page content at the exact place where it has been included. 

Save your Layout file. 

## Next steps
Congratulations! You have created a Layout file. Now you can create a Page that uses this Layout.  

* [Creating a Page]()

## Questions?

We are always happy to help with any questions you may have. Consult our  [documentation](), [contact support](), or  [connect with our sales team](). 
