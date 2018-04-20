---
title: April 12, 2018 — Release Notes
permalink: /release-notes/12-April-2018/
---

We received a lot of feedback from our precious Master Partners that worked with BC for the past decade. We had to quickly react with usability update that will make your life much easier.

## What's new

* **Format in filename**: Format in pages can now be set by using `filename.<format>.liquid` schema. It replaces YML definition (`format: <format>`).

Example file names:

* `users.json.liquid`
* `document.pdf.liquid`
* `sitemap.xml.liquid`
* `site.html.liquid`

Those files have only `slug` defined inside of them.

{% include alert/note.html content="This allows you to create multiple pages with the same slug, but different formats in the same directory." %}

### Based on community feedback

* **Views directory structure**: We moved all views into `views/` directory and divied it into three sub-directories: `pages`, `layouts`, `partials`
* **Renamed instance_profile_types**: Directory `instance_profile_types` has been renamed to `user_profile_types`
* **Renamed reservation_types**: Directory `reservation_types` has been renamed to `order_types`

Before:

    marketplace_builder
      ├── instance_profile_types
      ├── liquid_views
      │   └── layouts
      ├── pages
      └── reservation_types

After:

    marketplace_builder
      ├── order_types
      ├── user_profile_types
      └── views
          ├── layouts
          ├── pages
          └── partials

{% include alert/important.html content="After you move your partials to `views/partials/` you dont need to edit your includes - include tag resolves path relative to `views/partials/` directory." %}

{% include alert/note.html content="All changes are backward compatible. Your old code will still work." %}

## Improvements

* **Format validation**: Improved validation of format - only valid format will be set

### Based on community feedback

* **Fix pdf layouts**: Instead of hardcoding `layouts/pdf.liquid` you can now include format in name, ie. `views/layouts/application.pdf.liquid`
