---
title: Working with customizations
permalink: /getting-started/customization
---

## Introduction

This guide will help you understand the process of building a contact form backed up with Customization. Whenever you need to build a simple contact form, blog functionality or complex API endpoint, you can define any data structure you need with Customizations.

## Requirements

* [Liquid Markup](https://shopify.github.io/liquid/)
* [YAML](https://en.wikipedia.org/wiki/YAML)
* [cURL](https://curl.haxx.se/docs/manpage.html)
* [GraphQL](https://graphql.org/learn/)
* [Enable sync option with marketplace-kit in to apply changes on your site.](https://github.com/mdyd-dev/marketplace-kit#syncing-changes)

## Steps

1.  [Step 1: Contact Request - Customization Definition](#step_1).
2.  [Step 2: Contact Form - Data Creation](#step_2)
3.  [Step 3: Fetching saved data with GraphQL](#step_3)
4.  [Step 4: Building Contact Form with HTML](#step_4)
5.  [Step 5: Adding email notification](#step_5)

### <a name="step_1"></a> Step 1: Contact Request - Custom Model Type definition

In order to define a new Custom Model Type, we use YAML files that are placed in `custom_model_types` directory. In the key-value format you can define name for your Customization and array of custom attributes for Customization object. To build Contact Form we need email, name and description attributes on Customization that we can call `Contact Request`.
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

Basic Configuration of Customization consist of name and the list of custom attributes. In the example above we have defined three attributes of type `string`.
For more information on custom attributes please see [Custom Attributes Documentation](/reference/custom-attributes/).

### <a name="step_2"></a> Step 2: Contact Form - Form Object definition

Now that we have the definition of `Contact Request` in place, we can create a Form that will configure server to accept requests with data in the desired format. Data passed through the form will be stored in the database as Contact Request object.

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

The above definition whitelist name, email and description attributes and defines validation for each attribute. We can now use this form and send requests to [customization create endpoint](/reference/rest-api/customizations_post)

```bash
 curl -X POST http://pos.oregon.lvh.me:3000/api/customizations.json \
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

* Please note that when you use curl you need to set proper headers. To obtain API token, go to you site admin panel `/instance_admin/settings/api_keys` and click on generate token.
* From the example above we are sending the following parameters in the request:
  * `form_configuration_name` - name of the form object that we have created before
  * `parent_resource_id` - parameterized name of Custom Model Type, `Contact Request` becomes `contact_request`
  * `customization` - json attributes that correspond with structure of form and customization. Please note that custom attributes are nested within "properties_attributes" node.

### <a name="step_3"></a> Step 3: Fetching saved data with GraphQL

Now that we have created the ContactRequest in previous step, we can proceed to fetch this data with GraphQL. To define get_contact_requests query, create file `get_contact_requests.graphql` file in `graph_queries` directory.

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

To see if the above query works properly, let’s display the results on an html page. Contact list page can be created in `views/pages` directory as `contacts.liquid` file.

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

### <a name="step_4"></a> Step 4: Building Contact Form with HTML.

In [Step 2: Contact Form - Data Creation](#step_2) we have created form file called `contact_form`, that configures our form object. This was a minimal example that allowed us to send requests to our API endpoint and create Customization objects. Now we can extend this file with HTML, that renders the form to our users. HTML part of the file comes after configuration, which is after closing `---` tag.

{% raw %}

```liquid
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
  {% fields_for 'properties' %}
    <div>
      {% label 'name' %}
      {% input_field 'name', form: 'properties' %}
      {{ form_object.object.errors['properties.name'] }}
    </div>
    <div>
      {% label 'email' %}
      {% input_field 'email', form: 'properties' %}
      {{ form_object.object.errors['properties.email'] }}
    </div>
    <div>
      {% label 'description' %}
      {% input_field 'description', form: 'properties' %}
      {{ form_object.object.errors['properties.description'] }}
    </div>
  {% endfields_for %}

  {% submit 'Submit' %}
{% endform %}
```

{% endraw %}

Please note that we have added `redirect_to` configuration option, that defines where to redirect user after successful form submission. We are using predefined `form`, `fields_for` tags that allows us to create context for submitted data.
For mor information of advanced form configuration please visit [Form Configuration Documentation](/reference/form-configurations-static/).

To display the form on previously created `contacts` page we have to include it with:

{% raw %}

```liquid
{% render_form 'contact_form', parent_resource_id: 'contact_request' %}
```

{% endraw %}

Similar to `cURL` request from step 2, we have to pass Custom Model Type parameterized name as parent_resource_id and we need to point to the name of the form to include it properly in the page. As a result you should be able to create Customization objects, that we named Contact Request with simple form submission and list them after fetch with GraphQL. You have probably noted that we are not setting up headers and api keys with this approach, as those are included automagically with `form` tag

### <a name="step_5"></a> Step 5: Adding email notification.

If we want to send email notification to the email that was send with form submition we have to create email notification file that will define email fonfiguration and message tempalte.
File should be located in `notifications/email_notifications`, let's name it `contact_request_notification.liquid`:

{% raw %}

```liquid
---
name: contact_request_notification
delay: 0
enabled: true
from: info@example.com
subject: Contact Request
to: "{{ form.model.properties.email }}"
trigger_condition: true
---
<h2>Hi {{ form.model.properties.name }}</h2>
<div>Thank you for your request, we will contact you shortly!</div>
```

{% endraw %}

As you can see, all request parameters are now accessible in `form.model` object, so we can simply compose any email we want.
Next step is linking `contact_request_notification` in the `contact_form`, we do that by adding

```yml
email_notifications:
- contact_request_notification
```

to form configuration inside `form_configurations/contact_form.liquid` file.

Congratulations! You have learned how to build forms with Customization.
