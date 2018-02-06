---
title: Authorization Policy
permalink: /reference/authorization-policy/maciej
---

Authorization policies allows you to restrict access to forms and pages in a flexible way. Each form and page can have multiple policies attached to it. Policy is parsed using Liquid. If the content of the policy evaluates to anything other than `true`, policy is considered violated and the system will not proceed with executing action (like submitting a form or render a page).

## Adding a policy

To add an authorization policy, create a file in `authorization_policies/` directory, for example `only_allowed_by_johns.liquid`.
You can provide a name for this policy and a content, using Liquid. In Liquid, you have access to `current_user`, `object` (either FormConfiguration or Page - depending what you authorize) and `params`. You are allowed to use all Filters and GraphQL. Example policy file can look like:

{% raw %}
```liquid
---
name: 'only_allowed_by_johns'
---
{% if current_user.first_name == 'John'%}true{% endif %}
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
{% assign form_url = "/api/users/" | append: current_user.id %}
{% form_for form, url: @form_url %}
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
configuration:
  last_name:
    validation:
      presence: {}
---
{% assign form_url = "/api/users/" | append: current_user.id %}
{% form_for form, url: @form_url %}
  {% input last_name, label: 'Last Name' %}
  {% submit 'Save' %}
{% endform_for %}
```
{% endraw %}

## Associating policy with Page

Similarly to FormConfiguration, we can also associate policy with a Page. Let's assume we have a custom page and we only want users with first name `John` to be able to access it. Our page configuration file will look like this:

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

## Handling violated Policy

For now, a 403 status will be returned by the server without any body. Todo list:

* Add feature to render a custom page
* Add feature to redirect the user
