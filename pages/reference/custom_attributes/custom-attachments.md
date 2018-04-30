---
title: Custom Attachments
permalink: /reference/custom-attributes/custom-attachments
---

Custom attachments are used to add one or many attachments to Profile, Order, Customization, or Transactable.

## Defining

You can enable CustomAttachments by adding a CustomAttribute with `attribute_type` set to `file`, for example:

```yml
- name: Agreement
  attribute_type: file
```

## Form configuration

The Custom Attachment attribute must be defined in a form in order to whitelist and validate the form request.

```yml
...
custom_attachments:
  agreement:
    file:
      validation:
        file_content_type: { allow: ['image/jpeg', 'image/png', 'application/pdf'] }
...
```

## Fields

Each attachment supports the following self-descriptive fields:

| Field name | Type   | Note                                              |
| ---------- | ------ | ------------------------------------------------- |
| file       | String | file object associated with the custom attachment |

## Displaying, updating

After setting up attachments as described above, you can further customize them in the markup for the forms:

{% raw %}

```liquid
{% fields_for 'custom_attachments', form: 'vehicles' %}
  {% fields_for 'agreement', form: 'custom_attachments' %}
    {% assign attachment_object = form_object_agreement.object %}
    {% input file, form: 'agreement', as: 'attachment', collection: @attachment_object %}
  {% endfields_for %}
{% endfields_for %}
```

{% endraw %}

The example above shows the predefined attachment tag.

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
