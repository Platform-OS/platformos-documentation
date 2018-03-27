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
resource: Transactable
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
    workplace_online:
    budget:
      validation:
        presence: true
---
{% form %}
  {% input name %}
  {% input description, as: text %}

  {% fields_for properties %}
    {% input workplace_online, as: boolean, form: properties %}
    {% input workplace_onsite, as: boolean, form: properties %}
    {% input budget, form: properties %}
    {% input deadline, form: properties, placeholder: 'YYYY-mm-dd' %}
  {% endfields_for %}
  {% submit Save %}
{% endform %}
```
{% endraw %}

The page with embedded form could look like this:

{% raw %}
```liquid
---
slug: client/projects/new
format: html
layout_name: application
---
<h1>Create Project</h1>
{% render_form project, parent_resource_id: 'project' %}
```
{% endraw %}

and the one to edit existing transactable:

{% raw %}
```liquid
---
slug: client/projects/edit
format: html
layout_name: application
---
{% query_graph 'current_user', result_name: g %}
{% query_graph 'get_project', result_name: graph_project, slug: params.slugs, creator_id: g.current_user.id %}
{% if graph_project %}
  <h1>Edit {{ project.name }}</h1>
  {% render_form project, resource_id: @graph_project.project.id %}
{% else %}
  <p>Unfortunately we could not find this project.
{% endif %}
```
{% endraw %}

Which would re-use current_user graph query created in previous step, and will require a new `graph_queries/get_project.graphql`:

```graphql
query client_projects(
  $creator_id: ID!
  $slug: String!
)
{
  project: transactable(
    creator_id: $creator_id
    slug: $slug
  ) {
    id
    name
    slug
  }
}
```

To complete managing project, one would also need possibility to remove it via `form_configurations/destroy_project.liquid`:

{% raw %}
```liquid
---
name: destroy_project
resource: Transactable
---
{% form method: delete %}
  {% submit Delete %}
{% endform %}
```
{% endraw %}

Rendering this form would be very similar to the one from edit:
{% raw %}
```liquid
{% render_form destroy_project, resource_id: @project.id %}
```
{% endraw %}
