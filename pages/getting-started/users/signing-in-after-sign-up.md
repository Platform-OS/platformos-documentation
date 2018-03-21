---
title: Singing in automatically after sign up
permalink: /getting-started/users/signing-in-after-sign-up
---

This tutorial will help you to add automatic sign in to a signup form, so that a new user will be logged in right after account creation.

## Requirements

This tutorial assumes that you already have a working Sign up form, where a user can create a new account.

* [Sign up forms](./sign-up-forms)

## Steps

Automatic sign in after sign up is a three-step process:

1. Add `callback_actions` key to Sign up form
2. Create `user_session_create` GraphQL mutation
3. Create `session_create_form` form

### Step 1: Add `callback_actions` key to Sign up form

In your `sign_up` form configuration add `callback_actions` at the end (order doesn't matter) of the YML definition.

##### form_configurations/sign_up.liquid

{% raw %}

```liquid
---
...
callback_actions: "{% execute_query user_session_create, email: @form.email, password: @form.password %}"
---
```

{% endraw %}

This code snippet executes the `user_session_create` query, so you have to create it.

### Step 2: Create `user_session_create` GraphQL mutation

This mutation takes two obligatory arguments: `email` and `password`—both strings.

##### graph_queries/user_session_create.graphql

```graphql
mutation user_session_create($email: String!, $password: String!) {
  user_session_create(
    form_configuration_name: "session_create_form" # must match with `name` of your form
    email: $email
    password: $password
  ) {
    email
  }
}
```

This calls the `session_create_form` with the same arguments you received from the `callback_actions`.

Create the `session_create_form` form now.

### Create `session_create_form` form

SessionForm is supported by the server, so you don't need to define anything—the server will take care of handling user credentials and authenticating the user.

##### form_configurations/session_create_form

```yml
---
name: session_create_form
resource: Session
---
```

## Next steps

Congratulations! You have set up automatic user login after sign up.

You can continue with adding other flow-control or informational features, for example:

* [Singing in a user manually](./authentication)
* [Welcoming a new user with an email notification](../notifications/emails)
* [Creating a redirection to an edit profile page instead of the homepage after signup](../pages/redirects)
* Displaying a flash message that will help a user decide what to do

## Questions?

We are always happy to help with any questions you may have. Consult our [documentation](/), [contact support](), or [connect with our sales team]().
