---
title: Sign up forms
permalink: /getting-started/users/sign-up-forms
---
The very first forms we will create are the ones to allow users to sign up. You might want to skim the [full FormBuilder documentation](/reference/form-builder/), to get familiar with our powerful tool that we will leverage in this section.

All forms should be located in `form_configuration` directory. Let's create form to sign up developers first. We create a form named `form_configurations/developer/developer_sign_up.liquid`, with content:

{% raw %}
```liquid
---
name: developer_sign_up
base_form: UserForm
return_to: '/'
configuration:
  first_name:
    validation:
      presence: true
  password:
    validation:
      presence: true
  profiles:
    developer:
      enabled:
        property_options:
          default: true
          readonly: true
      validation:
        presence: true
    validation:
      presence: true
---
{% form_for form, url: '/api/users', method: 'post' %}

  {% input first_name %}
  {% input email %}
  {% input password, as: password %}

  {% fields_for profiles %}
    {% fields_for developer, form: profiles %}
      {% input enabled, as: hidden, form: client %}
    {% endfields_for %}
  {% endfields_for %}

  {% submit Create %}

{% endform_for %}
```
{% endraw %}

A lot going on here, so let's start from the beginning. Creating a form consists of two main parts:

1. Define configuration of the form
  * name - the name of the form, written in snake case. It is used to embed the form in a page
  * base_form - it defines for which model this form is created. In our example it is user, because we want to create a user. Please check [full FormBuilder documentation](/reference/form-builder/) for all options.
  * return_to - defines the url to which user will be redirected after success. You can use liquid. In our example, we will just redirect to the home page.
  * configuration - this is the heart of the configuration. Here one defines which fields should be acceptable by the form and it is possible to define validation of each of the field. Please note that depending on base form, some fields are hardcoded. In our example, such hardcoded fields is `email` - you might have noticed, that later in the example we create input for `email`, but it is not included in the configuration. If you wondered why it is working, the hardcoded fields is the answer.

# Configuration

  It is worth to dig a little bit deeper in our example of configuration. The first property we have defined is `first_name`; we  also marked it as required. The second field is `profiles`, and this is where the complexity arises. This is special abstraction, to easily associate user with any number of profiles one wants. We will see similar concept later on. The `profiles` is an instance of UserProfilesForm. It's "hardcoded" fields are actually dynamically generated - those are the names of the profiles created via `instance_profile_types` directory. In our example, we have two choices: developer and client. Since we create sign up for developer, we provided `developer`. Now, the `developer` is an instance of UserProfileForm. If you take a look at documentation, you will notice that one of the hardcoded fields there is `enabled` - and this is the field we have defined. The `property_options` is a special construction to add special behavior to the field. Here we used `default`, which provides default value (i.e. the value that will be used if user does not fill this field); `readonly` on the other hand ignores the user's input. This combination is useful, if you want to set something in a background, and do not want user to be able to override it. Because any input by user will be ignored, the default value will always used.

All of this might be a bit confusing at the first sight, like what really is this `enabled` field. All should be clearer, once you realize that last part of configuration, which is

```yml
developer:
  enabled:
    property_options:
      default: true
      readonly: true
  validation:
    presence: true
```

can be also represented as independent form, with configuration like this:

{% raw %}
```yml
...
base_form: UserProfileForm
configuration:
  enabled:
    property_options:
      default: true
      readonly: true
...
```
{% endraw %}

In other words, our forms are nested in each other - you can access them as 'sub forms'. In our example we want to create User and corresponding UserProfile at the same time. This behavior is desired if in our UI we have a page with a button that says "Sign up as a Developer". User provides first name, email, password and that's it - he becomes developer. Alternatively, UI can split it into two separate actions. It can first ask user to register, so the button would be just 'Sign up', and only after registration we can ask user if he wants to become a developer or a client. In this scenario, the first form look like:

```yml
---
name: generic_sign_up
base_form: UserForm
return_to: '/'
configuration:
  first_name:
    validation:
      presence: true
  password:
    validation:
      presence: true
---
```
and the second one would be similar to:

```yml
---
name: become_developer_form
base_form: UserProfileForm
return_to: '/'
configuration:
  property_options:
    default: true
    readonly: true
---
```

The end result would be the same. The point is, that with our platform, you have the power of creating multiple objects within one form submission - which might be more complex in terms of coniguration, but it can greatly simplify UX.

# Rendering inputs

The second part of the form is the actual html that will be presented to the user. There are few things that you will want to include in every form.

## Required inputs

* {% raw %}{% form_for form, url: '/api/users', method: 'post' %}{% endraw %} - In this line you define to which endpoint the form should point. It will always depend on a `base_form` value you have provided in the previous step. The method defines what you want to do with the model. If you want to create it, like in our example, you will use `post`. If you want to update existing model, you would use `put`. Finally, if you want to delete the resource - use `delete`. As always, we recommend to take a look at [full API Endpoints documentation](/reference/api-endpoints)

## Optional inputs
* {% raw %}<input value="{{ page.id }}" type="hidden" name="page_id" />{% endraw %} - The `page` is used to notify API which page should be rendered if submission of the form fails (most likely due to validation error). This allows to re-display user's input for all the field and display validation errors where applicable.

## Inputs

Right after some standard hidden inputs, we proceed with rendering proper inputs that the user will be expected to fill. To do that, we use utility liquid tag named `input`. It can save quite a bit of work - by default it is configured to generate html that is compatible with bootstrap 3 framework. Moreover, in case of validation errors, it automatically adds 'error' css class to the input and renders valdiation error message below the input. If bootstrap 3 is not that framework of your choice, in How To section we explain how to create your own re-usable set of inputs.

## Nested fields

The last part is the rendering of nested forms. As explained in the configuration section, what this form really does is not only creating a User with properties defined above, but at the same time it also creates UserProfile and associate it with the newly created User. It is possible to manually build inputs in standard html to achieve the same result, but it is hard and might change in the future. This is why we recommend using following syntax for this type of tasks:

{% raw %}
```liquid
  {% fields_for profiles %}
    {% fields_for developer, form: profiles %}
      {% input enabled, as: hidden, form: developer %}
    {% endfields_for %}
  {% endfields_for %}
```
{% endraw %}

The `fields_for` tag expects the first argument to be a string that represents nested object. The second one is a hash, where key is always `form` and value is the name of the parent form. If none provided, it will assume that the parent is the root form. In our example, we create not one level deep nested object, but atually two level deep. We first create `profiles` form the root form, and then `developer` for the `profiles` form. Then we create a hidden input `enabled` for `developer` form. The idea here is that if we wouldn't provide it, then the profile wouldn't be created - the nested configuration is ignored, if we don't send attributes via html. In other words, setting the configuration for UserForm to allow creating `developer` profile is not enough - the configuration just defines what is allowed to be submitted to the api endpoint. To actually create the developer profile along with user, we need to send value for at least one field that belongs to user profile - in this example, it was decided to provide value for `enabled` field.

# Creating Client form

After the explanation, creating sign up form for client should be trivial. We can do it by creating `form_configurations/client/client_sign_up.liquid` with content:


{% raw %}
```liquid
---
name: client_sign_up
base_form: UserForm
return_to: '/'
configuration:
  first_name:
    validation:
      presence: true
  password:
    validation:
      presence: true
  profiles:
    client:
      enabled:
        property_options:
          default: true
          readonly: true
      validation:
        presence: true
    validation:
      presence: true
---
{% form_for form, url: '/api/users', method: 'post' %}
  {% input first_name %}
  {% input email %}
  {% input password, as: password %}

  {% fields_for profiles %}
    {% fields_for client, form: profiles %}
      {% input enabled, as: hidden, form: client %}
    {% endfields_for %}
  {% endfields_for %}

  {% submit Create %}

{% endform_for %}
```
{% endraw %}

# Embedding form in page

Once we have successfully created form, we need to embed it to the page. In order to do it, let's create a new page, `pages/developer/sign-up.liquid`, with content:

{% raw %}
```liquid
---
slug: developer/sign-up
format: html
layout_name: application
name: Developer Sign Up
---
<h1>Create a Developer Account</h1>

{% render_form developer_sign_up, object_class: User, object_id: new %}
```
{% endraw %}

Now, when you go to https://example.com/developer/sign-up, you will be presented with the form you have created. To learn more about `render_form` tag, please check [liquid tag documentation](#).

Analogically, you can create page for client sign up:

{% raw %}
```liquid
---
slug: client/sign-up
format: html
layout_name: application
name: Client Sign Up
---
<h1>Create a Client Account</h1>

{% render_form client_sign_up, object_class: User, object_id: new %}
```
{% endraw %}
