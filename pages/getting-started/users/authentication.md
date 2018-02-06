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
<h1>Sign in</h1>

{% form_for user, url: '/users/sign_in', method: post %}
  {% input email, required: true %}
  {% input password, required: true %}
  <p>Forgot password? <a href="/users/password/new">Reset your password</a></p>
  {% submit 'Log In' %}
  <p>New user? Create <a href="/developer/sign-up"> new developer account</a> or <a href="/client/sign-up">new client account</a></p>
{% endform_for %}
```
{% endraw %}

This form is hardcoded - there is nothing to customize here, this is why you do not need to create a new file in `form_configuration`.

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
