---
title: Custom Images
permalink: /reference/custom-attributes/custom-attachments
---

Custom attachments are used to add one or many attachments to Profile, Order, Customization or Transactable.


## Defining

You can enable CustomAttachments by adding a CustomAttribute with `attribute_type` set to `photo` for example:

```yml
- name: Agreement
  attribute_type: file
```

## Version defaults

Each custom attachment upon creation is saved in three version. Each version has different predefined dimension and method used to resize the attachment.
The defaults are:

You can alter width, height and transform method for each version with `:versions_configuration`:

```yml
- name: avatar
  attribute_type: photo
```


## Form configuration

Custom Image attribute must be defined in form in order to whitelist and validate the form request.

```yml
...
  custom_attachments:
    avatar:
      attachment:
        validation: {
          file_content_type: { allow: ['attachment/jpeg', 'attachment/png', 'attachment/gif'] }
        }
...
```

## Fields

Each attachment supports following self-descriptive fields:

| Field name        | Type   | Note                                                                     |
| ----------------- | ------ | -------------------------------------------------------------------------|
| attachment             | String | attachment that has been sent via form - usually original input from user     |

## Displaying, updating

After having this, the way for editing those attachments can be further customized in the markup for the forms:

{% raw %}
```liquid
{% fields_for 'profiles' %}
  {% fields_for 'seller', form: 'profiles' %}
    {% fields_for 'custom_attachments', form: 'seller' %}
      {% fields_for avatar, form: custom_attachments %}
        {% input attachment, as: attachment, form: avatar %}
      {% endfields_for %}
    {% endfields_for %}
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
      avatar: custom_attachment(name: "avatar") {
        normal: url(version: "normal")
        thumb: url(version: "thumb")
        transformed: url(version: "transformed")
      }
    }
  }
}
```
