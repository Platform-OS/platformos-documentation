---
title: Authorization Policy
keywords: authorization liquid formbuilder
tags:
  - authorization
  - formbuilder
permalink: /reference/authorization_policy
sidebar: reference_sidebar
folder: Authorization Policy
published: true
---

## Prevent access for pages/forms

Some pages should be accessible only for registered users and some should have different rules.
Authorization Policy allow you to write rule in liquid an reuse it on different pages/forms.


Basic case is to have `marketplace_builder/authorization_policies/registered_user.liquid`
policy that will ensure that only registered users will see the page.

{% raw %}
```liquid
---
name: page_policy
redirect_slug: /unauthorized
---
{% query_graph 'current_user', result_name: g %}
{% if g.current_user %}true{% endif %}
```
{% endraw %}

Now you have to use this policy for a page.

```js
---
slug: dashboard
name: User Dashboard
layout_name: application
authorization_policies:
  - registered_user
---
<h1>Hello from restricted page</h1>
```

The same applies to form configurations.
