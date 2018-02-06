---
title: Marketplace Kit Overview
permalink: /getting-started/marketplace-kit-overview/file-structure
---
It is expected that the root directory of your project would contain `marketplace_builder` directory. All directories other than `marketplace_builder` will be ignored by gem. Hence, you can keep all your js, css files outside of marketplace_builder andd use whatever pre-processors you want to automatically generate end result files in proper path inside `marketplace_builder`.

Here is the usual content of the directory, along with a short explanation about each file or directory:

* `.builder` - this is configuration files, which determines which endpoints are available. Usually, you want to have two endpoints - staging and production.
* `instance_attributes.yml` - configuration files, which define things like allowed countries within marketplace, allowed currencies etc.
* `authorization_policies` - used to configure [Authorization Policies](/reference/authorization-policy/), which defines rules that control whether user has access to certain form and/or page. Files inside this directory should have `liquid` extension.
* `categories` - allows you to define [Categories](/reference/categories/), which you can then associate with UserProfiles, Transactables or Orders. Try to avoid using those if possible - most of the time, [Custom Attributes](/reference/custom-attributes/)  will be sufficient, and it is way easier to work with Custom Attributes than with Categories. Files are expected to have `yml` extension.
* `custom_model_types` - defines [Custom Model Types](/reference/custom-model-types/), which you will be able to use. Files are expected to have `yml` extension.
* `custom_themes` - custom themes are used to associate static assets to them - css, js, images. Although it is possible to have multiple custom themes per marketplace, only one can be used. You should not need to have more than one, most likely it will be changed in the future. See section about [adding web assets](/getting-started/pages/adding-web-assets) for information how to configure and use it.
* `form_configurations` - Includes all [Form Configurations](/reference/form-configurations), which are a representation of a form available in your website. Each of the `liquid` files should include both configuration (including associated authorization policies, notifications etc), along with liquid code which renders html.
* `graph_queries` - Includes `.graphql` files, each defining one [GraphQL Query](/reference/graphql/) - think of those as defining a query to our data store; you can use graphql queries in any liquid code.
* `instance_profile_types` - Files in this directory defines [User Profiles](/reference/instance-profile-types/) . Each marketplace includes one user role, called 'default', hence each marketplace needs to include the `default.yml` file inside this directory. If you would like to distinguish one group of users from the other (for example buyers vs sellers), you need to create a new file for each role.
* `liquid_views` - this directory contains layouts and partials - re-usable snippets of liquid code, which usually is used to render html. If you create a file with relative path `a/b/c.liquid`, then adding {% raw%}`{% include 'a/b/c' %}`{%endraw%} would inject the code included there.
* `mailers` - deprecated, please use `noifications/email_notifications` instead. We need to keep it for backwards compatibility reasons.
* `notifications` - contains files that define [Notifications](/reference/notifications/), which then can be associated with Form Configuration.
* `pages` - this directory allows you to define [Pages](/reference/pages/) - the heart of our platform. For each page you can configure a slug, i.e. the path at which it will be available and the liquid code, which will generate proper html.
* `reservation_types` - used to define [Order Types](/reference/order-types/). Order Type represents an action which should be allowed in your marketplace - for example booking (i.e. making reservation), subscription etc.
* `sms` - deprecated, please use `notifications/sms_notifications` instead.
* `topics` - define Topics for community marketplaces
* `transactable_types` - defines [Transactable Types](/reference/transactable-types/), which describe resources against which Orders will be created
* `translations` - contain `yml` files, which include [Translations](/reference/transactable-types/). They are mainly used for multi-lingual marketplaces, however you can also use them to define format of a date [for example, whether you want to use mm/dd/YYYY vs dd.mm.YYYY or any other), or flash messages returned by the api (i.e. notifications that action was successful)
