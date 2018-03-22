---
title: Authentication
permalink: /getting-started/users/authentication
---

There is more than one way to authenticate the user in NearMe Platform, however for sake of Getting Start guide, the most common option will be presented - using email and password pair, which user provided via [sign up form](/getting-started/users/sign-up-forms).

# Authentication forms

## Sign in

Usually you do not need anything more fancy than:

{% raw %}

```liquid
---
name: sign_in
resource: Session
---
{% form %}
  {% input email %}
  {% input password %}
  {% submit 'Log In' %}
{% endform %}
```

{% endraw %}

The Session resource is hardcoded - it has email and password fields, and that's it. This is why you do not even need to add configuration. To make the sign in available at `/sign-in`, you will want to create a page similar to:

{% raw %}

```liquid
---
slug: sign-in
format: html
layout_name: application
---
<h2>Log in </h2>
{% render_form sign_in %}
<p>New user? Create <a href="/developer/sign-up"> new developer account</a> or <a href="/client/sign-up">new client account</a></p>
```

{% endraw %}

## Log Out

If you want to allow user to log out, you can achieve it with following form:

{% raw %}

```liquid
---
name: log_out
resource: Session
---

{% form method: delete %}
  {% submit 'Log Out' %}
{% endform %}
```

{% endraw %}

Please note that the difference from logging in, is that you actually want to destroy the session - hence you have to send DELETE request, which you can achieve by providing `method: delete` attribute to `form` tag. You embed this form the same way as sign in:

{% raw %}

```liquid
{% render_form log_out %}
```

{% endraw %}

## Reset password

It is not uncommen for users to forget the password. A feature to reset a password is very complex, as it uses a lot of Platform OS features.

We start with creating a CustomModelType in which we will store each request for resetting password. We will call it 'reset_password' - hence we create a file `custom_model_types/reset_password.yml` with content:

{% raw %}

```yaml
---
name: reset_password
custom_attributes:
- name: email
  attribute_type: string
```

{% endraw %}

Then we provide a form to allow user to enter his email address `form_configurations/recover_password.liquid`:

{% raw %}

```liquid
---
name: recover_password
resource: Customization
resource_owner: anyone
return_to: /recover-password
flash_notice: 'If you provided the right email, we will send you reset password instructions.'
configuration:
  properties:
    email:
      validation:
        presence: true
        email: true
callback_actions: |-
  {% query_graph generate_user_temporary_token, email: form.properties.email, result: g %}
  {% if g.user %}
    {% execute_query update_password_token, id: g.user.id, token: g.user.temporary_token %}
  {% endif %}
---
{% form %}
  {% fields_for properties %}
    {% input email, form: properties %}
  {% endfields_for %}
  {% submit 'Recover Password' %}
{% endform %}
```

{% endraw %}

In a callback we graphql query to check if the provided email address has associated user in DB, and if yes, we generate a temporary token, which we will use to authenticate the request. The query in `graph_queries/generate_user_temporary_token.graphql` can look like this:

```
query generate_user_temporary_token($email: String) {
  user(email: $email) {
    id
    temporary_token(valid_for: 24)
  }
}
```

If the user exists, we will store the value of generated token in custom attribute associated with default profile. To create the custom attribute, we will define `instance_profile_types/default.yml` file with content:

```yml
name: default
custom_attributes:
- name: password_token
  attribute_type: string
```

Ths way, we will be able to make sure that only the most recent token can be used. To store the actual value, we need to create graphql mutation `graph_queries/update_password_token.graphql`:

```
mutation update_password_token(
  $id: ID!
  $token: String!
) {
  user_update(
    id: $id
    user: {
      profiles: [
        {
          name: "default",
          values: {
            properties: [
              { name: "password_token", value: $token }
            ]
          }
        }
      ]
    }
    form_configuration_name: "update_password_token"
  ) {
    id
  }
}
```

Each graphql mutation has associated form configuration with it, in this case it's `update_password_token`. Let's create `form_configurations/update_password_token.liquid`:

{% raw %}

```liquid
---
name: update_password_token
resource: User
resource_owner: anyone
configuration:
  email:
  profiles:
    default:
      properties:
        password_token:
          validation: { presence: true }
email_notifications:
  - send_recover_password
---
```

{% endraw %}

After storing the token, we want to send email to user with password instruction. Hence we create a file `email_notifications/send_recover_password.liquid`:

{% raw %}

```liquid
---
name: send_recover_password
to: '{{ form.email }}'
delay: 0
enabled: true
trigger_condition: true
from: no-reply@example.com
reply_to: no-reply@example.com
cc:
bcc:
subject: 'Reset password instructions'
layout_path: mailer
---
{%- query_graph get_user_with_password_token, email: form.email, result: g -%}
<h1>Hi {{ g.user.first_name }}!</h1>

<p>To reset your password, follow the link: <a href="{{ platform_context.host }}/reset-password?token={{ g.user.default.password_token | url_encode }}&email={{ g.user.email | url_encode }}">reset password!</a></p>
```

{% endraw %}

The email relies on graphql query called `get_user_with_password_token`, to fetch user's first name and the value of the token. Let's create `graph_queries/get_user_with_password_token.graphql` then:

```
query get_user_with_password_token($email: String, $id: ID) {
  user(email: $email, id: $id) {
    id
    email
    first_name
    default: profile(profile_type: "default") {
      password_token: property(name: "password_token")
    }
  }
}
```

Finally, let's create entrypoint to the workflow - by creating `pages/recover_password.liquid` with content:

{% raw %}

```liquid
---
slug: recover-password
format: html
layout_name: application
---
<h2>Forgotten Password</h2>
{% if flash.notice != blank %}
  <p>{{ flash.notice }}</p>
{% endif %}
{% render_form recover_password, parent_resource_id: reset_password %}
```

{% endraw %}

The email contains a link to `/reset-password` page, which can look like this:

{% raw %}

```liquid
---
slug: reset-password
format: html
layout_name: application
---
{%- query_graph get_user_with_password_token, email: params.email, result: g -%}
{% assign token_valid = params.token | temporary_token_valid: g.user.id %}
{% if g.user.id == blank or token_valid == false or g.user.default.password_token != params.token %}
  Unfortunately, provided token is not valid anymore. Please request password instructions again.
{% else %}
  <h2>Reset Password</h2>
  {% render_form reset_password, resource_id: @g.user.id %}
{% endif %}
```

{% endraw %}

On this page we check, if the provided token is valid as well as we fetch user's id based on email provided in the parameter. We re-use the graphql query created earlier.

On this page we want to embed form to actually reset password, hence we create a file `form_configurations/reset_password.liquid`:

{% raw %}

```liquid
---
name: reset_password
resource: User
resource_owner: anyone
return_to: /sign-in
flash_notice: 'Your password has been updated. You can now log in.'
configuration:
  email:
    property_options:
      readonly: true
  password:
    validation:
      confirmation: true
  password_confirmation:
    property_options:
      virtual: true
authorization_policies:
  - token_is_valid
---
{% form %}
  <input name="token" value="{{ params.token }}" type="hidden">
  <input name="email" value="{{ form.email }}" type="hidden">
  {% input password %}
  {% input password_confirmation %}
  {% submit 'Reset Password' %}
{% endform %}
```

{% endraw %}

To be able to re-render previous page if validation for password fails, we forward parameters which came from the email - email and token. The letter will be also used in authorization policy - we want to authenticate the user with this token to make sure he can't change password of other users than himself. Let's create this authorization policy `authorization_policies/token_is_valid.liquid`

{% raw %}

```liquid
---
name: token_is_valid
---
{%- query_graph get_user_with_password_token, id: params.id, result: g -%}
{%- assign token_valid = params.token | temporary_token_valid: params.id -%}
{% if g.user.id != blank and token_valid == true and g.user.default.password_token == params.token %}true{% endif %}
```

{% endraw %}

We are done. If user provides valid password and confirms it, the password will be changed and he will be redirected to `/sign_in page`. If the password is not valid, the system will re-render the form and display message explaining what is wrong. Finally, if the user tries to hijack someone else account by manually change id or providing not valid token, 403 status will be returned and the request will not be processed.

# Accessing authenticated user data

You can access information of authenticated user by using [GraphQL](/reference/graphql). Create a file `graphql/current_user.graphql` with content

```graphql
{
  current_user {
    id
    slug
    first_name
    email
    developer_profile: profile(profile_type: "developer") {
      id
    }
    client_profile: profile(profile_type: "client") {
      id
    }
  }
}
```

Now on any given page (including layout itself, though be careful with adding queries to the layout), you can add this liquid tag

{% raw %}

```liquid
  {% query_graph current_user, result_name: g %}
```

{% endraw %}

which fetches information defined in the graphql file for currently logged in user and stores it in variable named `g`. The returned data is a standard hash, so you can even display it via doing {% raw %}{{ g }}{% endraw %}. B
