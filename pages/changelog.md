---
title: Changelog
permalink: changelog
---

# April 7, 2018

We had a great run on catching small bugs and unifying APIs without breaking changes.

## Bug fixes

### Partials

* content is no longer required for views/pages/form configuration - before you had to put something after frontmatter/inside the partial file

### redirect_to

* redirect_to will now work with both `slug` and `/slug` (previously it worked only for /slug)

## Features

### Authorization policies

* added flash_alert to authorization_policy, similarly to form_configuration - [see updated docs](/reference/authorization-policy/)

### Form configuration

* `return_to` has been renamed to `redirect_to` (old version will still work - mapping was created)

### Redirects

* `redirect_url` has been renamed to `redirect_to` (old version will still work - mapping was created)

  [see updated docs](/getting-started/pages/redirects)

### Pages

* add validation to prevent adding page with /slug -> marketplace-kit error message will ask to change to slug during sync/deploy
* made it possible to change markdown handler to liquid
