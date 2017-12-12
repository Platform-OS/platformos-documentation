---
title: Custom Attributes
permalink: /reference/custom-attributes/
---
Custom Attributes are used to build custom forms and gather input from the user.

## CustomAddresses

Custom addresses are used to add one or many addresses to edited profile. Each address supports following self-descriptive fields:

{% raw %}
```
address String
latitude Float
longitude Float
formatted_address String
street String
suburb String
city String
state String
country String
iso_country_code String
postcode String
```
{% endraw %}

CustomAddresses are enabled by adding a CustomAttribute with `attribute_type = "address"` for example:

{% raw %}
```
- name: hq_address
  attribute_type: address
  html_tag: input
  input_html_options: {}
  label: Headquaters Address
  public: true
  search_in_query: false
  searchable: false
- name: correspondence_address
  attribute_type: address
  html_tag: input
  input_html_options: {}
  label: Correspondence Address
  public: true
  search_in_query: false
  searchable: false
```
{% endraw %}

Having this declaration in any of `instance_profile_types/` files will result in 2 CustomAddresses being available in the form configuration, where they can be used for example like this:

{% raw %}
```
  profiles:
    validation: { presence: true }
    seller:
      validation: { presence: true }
      custom_addresses:
        hq_address:
          validation: { presence: true }
          address:
            validation: { presence: true }
          city:
            validation: {}
          state:
            validation: { presence: true }
          street:
            validation: {}
          country:
            validation: {}
          postcode:
            validation: {}
        correspondence_address:
          address:
            validation: { presence: false }
          city:
            validation: {}
          state:
            validation: {}
          street:
            validation: {}
          country:
            validation: {}
          postcode:
            validation: {}
```
{% endraw %}

After having this, the way for editing those addresses can be further customized in the markup for the forms:

{% raw %}
```
{% fields_for profiles %}
  {% fields_for seller, form: profiles %}


    {% fields_for custom_addresses, form: seller %}
      <h2> Headquaters address </h2>
      {% fields_for hq_address, form: custom_addresses %}
        {% input address, form: hq_address %}
        {% input city, form: hq_address %}
        {% input street, form: hq_address %}
        {% input state, form: hq_address %}
        {% input country, form: hq_address %}
        {% input postcode, form: hq_address %}
      {% endfields_for %}

      <h2> Correspondence address </h2>
      {% fields_for correspondence_address, form: custom_addresses %}
        {% input address, form: correspondence_address %}
        {% input city, form: correspondence_address %}
        {% input street, form: correspondence_address %}
        {% input state, form: correspondence_address %}
        {% input country, form: correspondence_address %}
        {% input postcode, form: correspondence_address %}
      {% endfields_for %}
    {% endfields_for %}
  {% endfields_for %}
{% endfields_for %}
```
{% endraw %}
