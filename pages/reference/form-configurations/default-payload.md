---
title: Form Configuration - Default Payload
permalink: /reference/form-configurations-static/default-payload
---

## General Information

Form Configuration `default_payload` option allows to provide default request parameters
as JSON. Provided data and request parameters are joined together
before validation. All attributes passed this way must be defined in form configuration.

# Why and where to use default_payload

Default Payload can be used in all forms than needs to include data that is not directly send by user in form submission. Request data is processed in liquid and then merged with request data as new or original attribute. Perfect example can be a slug property that is formatted based on title/name property. Another important feature of is that it default_payload allows you to overwrite/extend user input on the server side. You can hence use it to for example store references, calculate prices etc - because user has no way to maliciously change the value, even if he tries to malform form's html.

## Variables

Liquid Tempalte syntax is available with three included objects:

* form
* params
* current_user

## Example

Default payload can help with setting action timestamp, states or modification of request state.
In the example below we set custom property `cancelled_at` with each from submition:

{% raw %}
```yml
---
...
configuration:
  properties:
    cancelled_at:
      validation:
        presence: true
default_payload: |-
  {%- assign date_now = 'now' | date: '%d-%m-%Y %H:%M:%S' -%}
  {
    "properties_attributes": {
      "cancelled_at": "{{ date_now }}"
    }
  }
---
```
{% endraw %}

## Custom Model Example

{% raw %}
```yml
---
...
configuration:
  properties:
    some_custom_property:
      validation:
        presence: true
default_payload: |-
  {
    "properties_attributes": {
      "some_custom_property": "New value for this property"
    }
  }
---
```
{% endraw %}
