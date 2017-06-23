---
title: Documentation process and standard
summary: Contribution and acceptance process
tags: [documentation, process]
permalink: meta/documentation-standard
sidebar: meta_sidebar
---

Written documentation will now become a part of regular process of writing code and become a part of the development cycle. To achieve that we will introduce a following process for every developer to follow when writing any code:.

[![Documentation Standard](/images/documentation_process.png)](/images/documentation_process.png)

## Permalinks


### Structure
Documentation is separated into following sections:

* *Getting started* - step by step description of setting up a marketplace
* *How-to* - list of common use patterns
    * Connecting to social media sites
    * Split registration
    * Configuring asset build process with webpack and sass
    * ...
* *Reference*
  * API endpoints
  * Liquid drops
    * Transactable
    * User
    * ...
  * Custom Filters
    * Text filters (?)
    * Price filters (?)
    * ...
  * Marketplace Builder configuration
    * ...
    * ...
  * Form Builder configuration
    * ...
    * ...
  * GraphQL properties
    * ...
* *Meta*
  * Contributing
  * Standard (this document)

Based on this structure we create permalinks using folder structure, where each nested level is another folder, e.g

```!text
Reference > Liquid Drops > User => /reference/liquid-drops/user
How to > Split Registration => /how-to/split-registration
```

### Top level file

Make sure that every folder contains an`index.html` file, which should be either:

* standalone document describing the concept, e.g. what API structure we use, what are custom filters in liquid, etc., or
* Table of Contents for this section, but that will require either maintaining links by hand or writing custom handler for navigation, or
* the first link in the navigation structure e.g. `Meta > Contributing => meta/index.html`

### Format

* Use only lower case letters
* Use hyphen `-` as the separator for words
* Do not add `.html` suffix, it's not necessary

## Page settings

Every page can have meta data set via [YAML Front Matter](https://jekyllrb.com/docs/frontmatter/) .

* `title` - HTML title, good title is crucial for improving findability
* `summary` - This is used in search engines to provide a description of the search result. Make sure it’s short and to the point - *it needs to fit below 70 characters*
* `tags` - array of tags that will be used for creating a search index. Make sure to not overdo it.
* `sidebar` - select which sidebar will be displayed
* `folder` - select active folder in the sidebar
* `layout` - if more than one layout is available, you can select it here

### Example
```!yaml
---
title: Get access to our platform
tags: [getting_started]
summary: "Get access to our platform"
sidebar: getting_started_sidebar
permalink: getting-started/get-access.html
folder: getting_started
layout: page
---

## Here goes the actual page content

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fugiat ipsam dolorum dolorem quo, harum doloribus tempora iure minima officia atque quasi quisquam, ad nisi aliquam quod, unde error nihil.
```

## Code examples

```
```!javascript
<h1>Code.ruby = 'awesome'</h1>
<script>
document.write('attack');
</script>
```
```

## Screenshots

## Headings


