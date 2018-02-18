---
title: Creating Transactable
permalink: /getting-started/transactables/creating-transactable
---
Similarly to user profiles, for which we were creates a file in `instance_profile_types` first, before we start building a form for project, we need to create [TransactableType](/reference/transactable-type). It defines the business rules of the transaction associated with this transactable - whether it is time based booking, an offer or something else. This files also will define available property of project.

In the previous section we have defined briefly super high level business rules - a client should be able to create a Project. Developer will be invited to the project by client, and he would need to submit his offer. Project should contain enough information to let Developer decide, whether he is interested in working on it or not. Let's assume, that developers are mainly interested what is the deadline, the budget, whether it is remote or onsite. Each transactable by default have attributes name and description, which we will be able to use. Based on this specification, we create a file named `/transactable_types/project.yml` with the following content:

```yaml
---
name: Project
custom_attributes:
- name: workplace_onsite
  attribute_type: boolean
- name: workplace_online
  attribute_type: boolean
- name: deadline
  attribute_type: date
- name: budget
  attribute_type: float
---
```
Now we can proceed with building a form to create Transactable.

{% raw %}
```liquid
---
name: project
return_to: '/'
base_form: TransactableForm
configuration:
  name:
    validation: { presence: true }
  description:
    validation:
      presence: true
  properties:
    deadline:
      validation:
        presence: true
    workplace_onsite:
      validation: {}
    workplace_online:
      validation: {}
    budget:
      validation:
        presence: true
---
{% assign form_url = "/api/user/transactables/" | append: form.id %}
{% if form.id == blank %}
  {% assign http_method = 'post' %}
{% else %}
  {% assign http_method = 'put' %}
{% endif %}

{% form_for form, url: @form_url, method: @http_method %}

  {% input name %}
  {% input description, as: text %}

  {% fields_for properties %}
    {% input workplace_online, as: boolean, form: properties %}
    {% input workplace_onsite, as: boolean, form: properties %}
    {% input budget, form: properties %}
    {% input deadline, form: properties, placeholder: 'Y-m-d' %}
  {% endfields_for %}

  {% submit Save %}
{% endform_for %}
```
{% endraw %}

The page with embedded form could look like this:

{% raw %}
```liquid
---
slug: client/projects/new
format: html
layout_name: application
name: Add a Project
---
<h1>Create Project</h1>

{% render_form project, object_class: Transactable, object_id: 'new', parent_object_class: 'TransactableType', parent_object_id: 'project', return_to: @params.return_to %}
```
{% endraw %}

and the one to edit existing transactable:

{% raw %}
```liquid
---
slug: client/projects/edit
format: html
layout_name: application
name: Edit a Project
---
<h1>Edit Project</h1>
{% render_form project, object_class: Transactable, object_id: @params.slug, parent_object_class: 'TransactableType', parent_object_id: 'project' %}
```
{% endraw %}


What is special about this form is that it can be used to both create a new and edit existing Transactable. The if statement shows one of many examples of how to check what is the current context. To create a new Transactable, the endpoint is POST `/api/user/transactables`, whereas for upating existing one, the context is `/api/user/transactables/<id>`. The second endpoint guarantees, that only user who created transactable will be able to edit it. To allow users to update transactables of others, one should skip the user namespace, making the url `/api/transactables/<id>`. This is not enabled by default for security reasons. One most likely will want to add proper authorization policies before making this endpoint accessible. If you are interested in this feature, please contact our support.

The next unintuitive thing is the hidden attribute with name `transactable_type_id` - this is necessary, because each marketplace might have multiple different transactables, each with different action types and properties. In this example, this value is inserted dynamically via a `Drop` associated with the form.

Last but not least is the configuration of [ActionTypes](/reference/action-types) - we encourage to get familiar with the concept on [Reference](/reference) page.
