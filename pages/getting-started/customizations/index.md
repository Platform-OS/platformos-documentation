---
title: Working with Customizations
permalink: /getting-started/customization
---

## Introduction

This guide will help you understand the process of building a contact form backed up with Customization. Whenever you need to build a simple contact form, blog functionality, or complex API endpoint, you can define any data structure you need with Customizations.

## Requirements

* [Liquid Markup](https://shopify.github.io/liquid/)
* [YAML](https://en.wikipedia.org/wiki/YAML)
* [cURL](https://curl.haxx.se/docs/manpage.html)
* [GraphQL](https://graphql.org/learn/)
* [Enable sync option with marketplace-kit to apply changes on your site](https://github.com/mdyd-dev/marketplace-kit#syncing-changes)

## Steps

1.  [Step 1: Contact Request—Customization Definition](#step_1).
2.  [Step 2: Contact Form—Data Creation](#step_2)
3.  [Step 3: Fetch saved data with GraphQL](#step_3)
4.  [Step 4: Build Contact Form with HTML](#step_4)
5.  [Step 5: Add email notification](#step_5)

### <a name="step_1"></a> Step 1: Contact Request—Custom Model Type definition

To define a new Custom Model Type, use YAML files placed in the `custom_model_types` directory. In the key-value format you can define a name for your Customization, and an array of custom attributes for the Customization object. To build a Contact Form, you'll need email, name, and description attributes on Customization that you can call a `Contact Request`.

Create a file `custom_model_types/contact_request.yml` with the following content:

```yml
name: Contact Request
custom_attributes:
- name: name
  attribute_type: string
- name: email
  attribute_type: string
- name: description
  attribute_type: string
```

The basic Configuration of Customization consists of a name and the list of custom attributes. In the example above, you have defined three attributes of type `string`.

For more information on custom attributes please see [Custom Attributes Documentation](/reference/custom-attributes/).

### <a name="step_2"></a> Step 2: Contact Form—Form Object definition

Now that you have the definition of a `Contact Request` in place, you can create a Form that will configure the server to accept requests with data in the desired format. Data passed through the form will be stored in the database as a Contact Request object.

`form_configurations/contact_form.liquid`

```yml
---
name: contact_form
resource: Customization
resource_owner: anyone
configuration:
  properties:
    name:
      validation:
        presence: true
    email:
      validation:
        presence: true
        email: true
    description:
      validation:
        presence: true
---
```

The above definition whitelists name, email and description attributes and defines validation for each attribute. You can now use this form, and send requests to [customization create endpoint](/reference/rest-api/customizations_post)

```bash
 curl -X POST https://example.com/api/customizations.json \
   -H "Authorization: Token token=a86127dc5c394d1f1d0eb52c3353f1a3" \
   -H "Accept: application/vnd.nearme.v4+json"\
   -H "Content-type: application/json"\
   -d \
   '
   {
     "form_configuration_name": "contact_form",
     "parent_resource_id": "contact_request",
     "customization": {
       "properties_attributes" : {
         "name": "User Name",
         "email": "user@example.com",
         "description": "Please contact me."
       }
     }
   }
   '
```

* Please note that when you use curl you need to set proper headers. To obtain an API token, go to your site admin panel `/instance_admin/settings/api_keys`, and click on generate token.
* From the example above you are sending the following parameters in the request:
  * `form_configuration_name`: name of the form object that you have created before
  * `parent_resource_id`: parameterized name of Custom Model Type, `Contact Request` becomes `contact_request`
  * `customization`: json attributes that correspond with structure of form and customization. Please note that custom attributes are nested within "properties_attributes" node.

### <a name="step_3"></a> Step 3: Fetch saved data with GraphQL

Now that you have created the ContactRequest in the previous step, you can proceed to fetch this data with GraphQL. To define get_contact_requests query, create file `get_contact_requests.graphql` file in `graph_queries` directory.

```graphql
query get_contact_requests {
  customizations(name: "contact_request") {
    results {
      name: property(name: "name")
      email: property(name: "email")
      description: property(name: "description")
    }
  }
}
```

To see if the above query works properly, display the results on an html page. Contact list page can be created in the `views/pages` directory as `contacts.liquid` file.

```liquid
{% raw %}
---
slug: contacts
layout_name: ''
---

{%- query_graph 'get_contact_requests', result_name: 'g' -%}

<ul>
  {% for user in g.customizations.results %}
    <li>{{ user.name }}, {{ user.email }}, {{ user.description }}</li>
  {% endfor %}
</ul>
{% endraw %}
```

### <a name="step_4"></a> Step 4: Build Contact Form with HTML.

In [Step 2: Contact Form - Data Creation](#step_2) you have created a form file called `contact_form`, that configures the form object. This was a minimal example to allow sending requests to our API endpoint, and create Customization objects. Now you can extend this file with HTML, that renders the form to our users. The HTML part of the file comes after the configuration part, i.e. after the closing `---` tag.

{% raw %}

```html
---
name: contact_form
resource: Customization
resource_owner: anyone
redirect_to: /contacts
configuration:
  properties:
    name:
      validation:
        presence: true
    email:
      validation:
        presence: true
        email: true
    description:
      validation:
        presence: true
---
{% form %}
  <div>
    <label for="name"><abbr title="required">*</abbr> Name</label>
    <div>
      <input name="{{ form_builder.fields.properties.name.name }}" value="{{ form_builder.fields.properties.name.value }}" id="name" type="text">
      {% if form_builder.errors.name %}
        <p>{{ form_builder.errors.name }}</p>
      {% endif %}
    </div>
  </div>

  <div>
    <label for="email"><abbr title="required">*</abbr> Email</label>
    <div>
      <input class="string email required" name="{{ form_builder.fields.properties.email.name }}" value="{{ form_builder.fields.properties.email.value }}" id="email" type="email">
      {% if form_builder.errors.email %}
        <p>{{ form_builder.errors.email }}</p>
      {% endif %}
    </div>
  </div>

  <div>
    <label for="description"><abbr title="required">*</abbr> Description</label>
    <div>
      <textarea name="{{ form_builder.fields.properties.description.name }}" id="description">{{ form_builder.fields.properties.description.value }}</textarea>
      {% if form_builder.errors.description %}
        <p>{{ form_builder.errors.description }}</p>
      {% endif %}
    </div>
  </div>

  {% submit 'Submit' %}
{% endform %}
```

{% endraw %}

The `redirect_to` configuration option defines where to redirect the user after successful form submission. The predefined `form`, `fields_for` tags allow you to create context for submitted data.

For more information of advanced form configuration please visit [Form Configuration Documentation](/reference/form-configurations-static/).

To display the form on previously created `contacts` page you have to include it with:

{% raw %}

```liquid
{% render_form 'contact_form', parent_resource_id: 'contact_request' %}
```

{% endraw %}

Similarly to the `cURL` request in step 2, you have to pass the Custom Model Type parameterized name as parent_resource_id, and point to the name of the form to include it properly in the page. As a result you should be able to create Customization objects, called Contact Request with simple form submission, and list them after fetching with GraphQL. You are not setting up headers and API keys with this approach, as those are included automagically with the `form` tag.

### <a name="step_5"></a> Step 5: Adding email notification.

To send an email notification to the email that was sent with form submition, create an email notification file that will define email configuration and message template.

File should be located in the `notifications/email_notifications`, name it `contact_request_notification.liquid`:

{% raw %}

```liquid
---
name: contact_request_notification
delay: 0
enabled: true
from: info@example.com
subject: Contact Request
to: '{{ form.model.properties.email }}'
trigger_condition: true
---
<h2>Hi {{ form.model.properties.name }}</h2>
<p>Thank you for your request, we will contact you shortly!</p>
```

{% endraw %}

As you can see, all request parameters are now accessible in `form.model` object, so you can simply compose any email you want.

Next step is linking `contact_request_notification` in the `contact_form` by adding

```yml
email_notifications:
- contact_request_notification
```

to form configuration inside `form_configurations/contact_form.liquid` file.

Congratulations! You have learned how to build forms with Customization.
