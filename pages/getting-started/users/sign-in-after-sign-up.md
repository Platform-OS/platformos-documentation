---
title: Sign In user after Sign Up
permalink: /getting-started/users/sign-in-after-sign-up
---

## Overview

If you want your user to be immediately signed into the marketplace after sign up you need to use `callback_action` that will execute graphql mutation with his email and password. System knows it at this time, because it is still in the context of the form being sent.

## Example

### Sign Up form configuration

In your `sign_up` form configuration lets add callback_action at the end of the YML definition.

{% raw %}
```liquid
---
...
callback_actions: |-
  {% execute_query user_session_create, email: @form.email, password: @form.password %}
---
```
{% endraw %}

We are executing `user_session_create` query.


### GraphQL mutation

This mutation takes two obligatory arguments: `email` and `password` - both strings.

```graphql
mutation user_session_create($email: String!, $password: String!) {
  user_session_create(form_configuration_name: "session_create_form", email: $email, password: $password) {
    email
  }
}
```

We are calling form called `session_create_form` with the same arguments we have received from the `callback_action`.

Lets create that form now.

### Session create form configuration

Because SessionForm is supported in our backend and it knows what to when receiving correct email and password, you dont need to define anything else - we will take care of everything else behind the scenes.

```yml
---
name: session_create_form
base_form: SessionForm
---
```

## Summary

Thats it. Any user should be logged in immediately after successfully creating an account.