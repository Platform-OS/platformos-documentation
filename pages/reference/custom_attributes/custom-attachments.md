---
title: Custom Attachments
permalink: /reference/custom-attributes/custom-attachments
---

Custom attachments are used to add one or many attachments to Profile, Order, Customization or Transactable.


## Defining

You can enable CustomAttachments by adding a CustomAttribute with `attribute_type` set to `file` for example:

```yml
- name: Agreement
  attribute_type: file
```

## Form configuration

Custom Attachment attribute must be defined in form in order to whitelist and validate the form request.

```yml
...
custom_attachments:
  agreement:
    file:
      validation:
        file_content_type: { allow: ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'] }
...
```

## Fields

Each attachment supports following self-descriptive fields:

| Field name        | Type   | Note                                                    |
| ----------------- | ------ | --------------------------------------------------------|
| file              | String | file object associated with the custom attachment       |

## Displaying, updating

After having this, the way for editing those attachments can be further customized in the markup for the forms:

{% raw %}
```liquid
{% fields_for custom_attachments, form: vehicles %}
    {% fields_for agreement, form: custom_attachments %}
      {% assign attachment_object = form_object_agreement.object %}
      {% input file, form: 'agreement', as: attachment, collection: @attachment_object %}
    {% endfields_for %}
  {% endfields_for %}
```
{% endraw %}

In the example above we are using predefined attachment tag

## Using GraphQL to query for `CustomAttachment`

```graphql
query test_attachment_query {
  customizations {
    results {
      certificate: custom_attachment(name: "agreement") {
        id
        file_name
      }
    }
  }
}
```
