---
title: Authorization Policy
permalink: /reference/authorization-policy/
---

Authorization policies allows you to restrict access to forms and pages in a flexible way. Each form and page can have multiple policies attached to it. Policy is parsed using Liquid.

If the content of the policy evaluates to anything other than `true`, policy is considered violated and the system will not proceed with executing action (like submitting a form or render a page).

Violation means server will redirect to the path set in `redirect_to` with http status code of 403 (forbidden).

## Adding a policy

To add an authorization policy, create a file in `authorization_policies/` directory, for example `only_allowed_by_johns.liquid`. You are allowed to use all liquid features and GraphQL in your authorization policy.

Assuming you have prepared graphql query called `current_user`, example policy file can look like:

{% raw %}

```liquid
---
name: 'only_allowed_by_johns'
redirect_to: /login
---
{% query_graph 'current_user', result_name: g %}
{% if g.current_user.first_name == 'John' %}true{% endif %}
```

{% endraw %}

In this example, only users with the first name `John` will be allowed to perform action with this policy.

## Associating policy with FormConfiguration

Let's assume we have a very simple form, which the only thing it allow is changing user's last name. The configuration file can look like this:

{% raw %}

```liquid
---
name: update_last_name
base_form: UserUpdateProfileForm
configuration:
  last_name:
    validation:
      presence: {}
---
{% form_for form, url: "/api/users/{{ current_user.id }}" %}
  {% input last_name, label: 'Last Name' %}
  {% submit 'Save' %}
{% endform_for %}
```

{% endraw %}

In order to associate authorization policy, one just needs to add a new key `authorization_policies` and then specify array of policy names, which should be associated with this form. To ensure that only Johns will be able to submit this form, we can update the configuration to include our policy:

{% raw %}

```liquid
---
name: update_last_name
base_form: UserUpdateProfileForm
authorization_policies:
  - only_allowed_by_johns
...
```

{% endraw %}

## Associating policy with Page

Similarly to `FormConfiguration`, we can also associate policy with a Page. Let's assume we have a custom page and we only want users with first name `John` to be able to access it. Our page configuration file will look like this:

```liquid
---
slug: john-private-page
name: John Private Page
layout_name: application
authorization_policies:
  - only_allowed_by_johns
---
<h1>Hello John!</h1>
```

## Context `object`

Apart from pulling data from GraphQL you have also access to a global object under variable called `object` (watch out to not override it).

* If authorization policy is called from a FormConfiguration this object will contain `Form` object

* If authorization policy is called from a Page this object will contai `Page` object

## Handling violated Policy

For now, a 403 status will be returned by the server without any body.

{% comment %}
TODO:
Add feature to render a custom page
{% endcomment %}
