---
title: How to contribute to our documentation pages
summary: Quick introduction to help anyone improve Marketplace Platform documentation.
keywords: documentation edit pages github prose
tags: [meta, documentation, edit, prose, github]
permalink: meta_contributing.html
hide_sidebar: true
---

## Technologies

Our documentation is based on Jekyll and is hosted by [Github](https://github.com).

To edit any page you need to commit changes to our git repository.

This means there are several ways of proposing changes to our documenation for more and less tech savvy editors.


## Authoring

If you have write access, your pushed changes will be visible within couple of minutes to all the users (assuming jekyll is still building successfully).

If you dont have write access, your changes need to be approved by someone with write access.

## Tools

### Prose - recommended

To make editing process as easy as possible, link "Edit this page" is pointing to an amazing tool called [Prose](https://prose.io) which is an WYSIWYG editor for Github stored files. It also has Jekyll support so you can easily edit meta data (Title, tags, keywords, permalink etc.)

Watch how to use prose.io to edit pages made by one of the users.

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/Dv2ZUvH-pho?rel=0" frameborder="0" allowfullscreen></iframe>

### Command line

You can [clone](https://help.github.com/articles/cloning-a-repository/) (or [fork](https://help.github.com/articles/fork-a-repo/)) our repository ({{site.repository}}), make your changes and submit PR to the original

### Github

Integrated [edit feature](https://help.github.com/articles/editing-files-in-your-repository/) within github is the quickest way to start contributing your changes.


## Syntax

Our documentation is written in Markdown.

You can use Liquid inside this markdown because Jekyll will parse it.

Meta data is written in YAML using [Frontmatter](https://jekyllrb.com/docs/frontmatter/). Editing it is extremely easy in prose as it has its own tab.

To include some code examples you need to put it inside a [raw tag](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#raw).

[See example gist](https://jsbin.com/zokide/1) of Liquid and javascript snippets of code.

## Adding new page

When you add a new page remember to:

* Make file name as descriptive as possible. Look around the directory to see the pattern. Some file names have prefixes. For example: `gs_` for `Getting started`

* Make sure you have filled required and optional meta data, like `title`, `permalink`, `tags`, `keywords`.

* Make sure you have added link to your page when its done in proper place. For example in a specific Sidebar


## Best practices and tricks

It is always a good idea to properly tags your content with meta data like tags, keywords, title, summary. This will help other users find your content via search, google and incoming feature to our documentation that will allow users to group series of pages into even more flexible series that it is done now.
