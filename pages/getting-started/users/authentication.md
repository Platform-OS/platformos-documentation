---
title: Authentication
permalink: /getting-started/users/authentication
---
There is more than one way to authenticate the user in NearMe Platform, however for sake of Getting Start guide, the most common option will be presented - using email and password pair, which user provided via [sign up form](/getting-started/users/sign-up-forms).

# Authentication forms

## Sign in

The login form is always provided at `/users/sign_in` path by default. To customize its look and feel, one can override `liquid_views/sessions/new.liquid`. Here is the example content:

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
---
name: log_out
resource: Session
---
{% form method: delete %}
  {% submit 'Log Out' %}
{% endform %}
{% endraw %}

Please note that the difference from logging in, is that you actually want to destroy the session - hence you have to send DELETE request, which you can achieve by providing `method: delete` attribute to `form` tag. You embed this form the same way as sign in:

{% raw %}
```liquid
{% render_form log_out %}
```
{% endraw %}

## Reset password

It is not uncommen for users to forget the password. A feature to reset a password is automatically provided. It is accessible at `/users/password/new`. To customize the form, one should edit the file `liquid_views/passwords/new.liquid`. Sample minimalistic example of such form is presented below:

{% raw %}
```liquid
<h1>Reset password</h1>
{% form_for user, url: '/users/password', method: post %}
  <p>Fill in your email below and we'll send you instructions to reset your password.</p>
  {% input email, required: true %}
  {% submit 'Reset Password' %}
{% endform_for %}
```
{% endraw %}

Analogically to Sign In form, the reset password feature is hardcoded and available to you as it is. There is no need to create form configuratin for this form.

# Accessing authenticated user data

You can access information of authenticated user by using [GraphQL](/reference/graphql). Create a file `graphql/current_user.graphql` with content

```graphql
{
  current_user{
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
