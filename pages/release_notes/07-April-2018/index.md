---
title: April 7, 2018 — Release Notes
permalink: /release-notes/07-April-2018/
---

We had a great run on catching small bugs and unifying APIs without breaking changes.
As always we are listening and fixing things that are making your job harder.

## What's new

* **Liquid handler**: added `liquid` handler in pages (addition to `markdown`)
* **Added flash_alert**: added `flash_alert` to `authorization_policy` - [see updated docs](/reference/authorization-policy/)

## Improvements

* **Rename return_to**: `return_to` has been renamed to `redirect_to`
* **Rename redirect_url**: renamed `redirect_url` to `redirect_to` - [see updated docs](/getting-started/pages/redirects)
* **Allow redirect_to start with /**: redirect_to works with both `slug` and `/slug`

{% include alert/note.html content="Renamings were done in a backwards compatible manner, so your old code will still work." %}

### Based on community feedback

* **Empty content in views**: content is no longer required for views/pages/form configuration - you can create empty partial
* **Slug starting with /**: added validation to prevent adding page with slug starting with `/`. marketplace-kit error message will ask to fix it during sync/deploy
