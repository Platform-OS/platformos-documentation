---
title: Changelog
permalink: changelog
---

# April 7, 2018

We had a great run on catching small bugs and unifying APIs without breaking changes.
As always we are listening and fixing things that are making your job harder.

## Community feedback

* content is no longer required for views/pages/form configuration - you can create empty partial
* added validation to prevent adding page with slug starting with `/`. marketplace-kit error message will ask to fix it during sync/deploy

## New features

### Authorization policies

* added `flash_alert` to `authorization_policy` - [see updated docs](/reference/authorization-policy/)

### Form configuration

* `return_to` has been renamed to `redirect_to` (old version still works)

### Pages

* added `liquid` handler (as addition to `markdown`)
* renamed `redirect_url` to `redirect_to` (old version still works) [see updated docs](/getting-started/pages/redirects)

{% include alert/note.html content="redirect_to works with both `slug` and `/slug`" %}
