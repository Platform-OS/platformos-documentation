---
title: Authorization Policy
permalink: /reference/authorization-policy/
---

Authorization policies allows you to restrict access to forms and pages in a flexible way. Each form and page can have multiple policies attached to it.

Each policy is parsed using Liquid and system will check them in order of their appearance in the `authorization_policies` key.

If the content of the policy evaluates to anything other than `true`, policy is considered violated and the system will not proceed with executing action (like submitting a form or render a page).

## Adding a policy

To add an authorization policy, create a file in `authorization_policies/` directory, for example `only_allowed_by_johns.liquid`. You are allowed to use all liquid features and GraphQL in your authorization policy.

Assuming you have prepared GraphQL query called `current_user`, example policy file can look like:

{% raw %}

```liquid
---
name: only_allowed_by_johns
---
{% query_graph 'current_user', result_name: 'g' %}
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
resource: User
configuration:
  last_name:
    validation:
      presence: {}
---
{% form url: "/api/users/{{ current_user.id }}" %}
  {% input 'last_name', label: 'Last Name' %}
  {% submit 'Save' %}
{% endform %}
```

{% endraw %}

In order to associate authorization policy, one just needs to add a new key `authorization_policies` and then specify array of policy names, which should be associated with this form. To ensure that only Johns will be able to submit this form, we can update the configuration to include our policy:

{% raw %}

```yml
---
name: update_last_name
resource: User
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
authorization_policies:
  - only_allowed_by_johns
---
<h1>Hello John!</h1>
```

## Contextual `object`

Apart from pulling data from GraphQL you have also access to a variable called `object` (watch out to not override it).

Depending from where authorization policy is called this object contain:

* `Form` object in FormConfiguration context

* `Page` object in Page context

## Handling violated Policy

You can either send user to a different path or server by default will return empty page with `403 Forbidden` status code.

To redirect user to a page after violation set `redirect_to` key, for example to redirect to page `/login`:

To generate flash alert message on the page that you defined as `redirect_to` use `flash_alert` property.

{% raw %}

```yml
---
name: only_allowed_by_johns
redirect_to: /login
flash_alert: Please login to access this page.
---
...
```

{% endraw %}

As with normal flash messages, you can access it liquid using `{{ context.flash }}` variable.
