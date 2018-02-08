---
title: Sign In user after Sign Up
permalink: /getting-started/users/sign-in-after-sign-up
---

## Overview

If you want your user to be immediately signed into the marketplace after sign up you need to use `callback_action` that will execute graphql mutation with his email and password. System knows it at this time, because it is still in the context of the form being sent.

## Example

Lets look at the example.

### Sign Up form configuration

In you `sign_up` form configuration lets add callback_action at the end of the YML definition.

{% raw %}
```liquid
---
...
callback_actions: |-
  {% execute_query user_session_create, email: @form.email, password: @form.password %}
---
```
{% endraw %}

### GraphQL mutation

Because we are executing `user_session_create` query, it needs to be created. It should take two arguments: `email` and `password` - both strings.

```graphql
mutation user_session_create($email: String!, $password: String!) {
  user_session_create(form_configuration_name: "session_create_form", email: $email, password: $password) {
    email
  }
}
```

We are executing form called `session_create_form` with the same arguments we have received from the `callback_action` and returning user email it sucessfully returns. Lets create the form that is used above.

### Session create form configuration

Because this form (SessionForm) is supported in our backend and it knows what to when receiving correct email and password, you dont need to define anything else - we will take care of everything else behind the scenes.

```yml
---
name: session_create_form
base_form: SessionForm
---
```

## Summary

Thats it. Your user should be logged in immediately after creating account.