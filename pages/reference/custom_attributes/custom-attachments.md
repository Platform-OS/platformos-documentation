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

```html
<div>
  <label><span>Select file...</span>
  <input accept=".pdf,.jpg,.jpeg,.png" name="{{ form_builder.fields.custom_attachments.agreement.file.name }}" type="file"></label>
  {% if form_builder.errors['custom_attachments.agreement.file'] %}
    <p>{{ form_builder.errors['custom_attachments.agreement.file'] }}</p>
  {% endif %}
</div>
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
