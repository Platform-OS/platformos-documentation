---
title: Custom Images
permalink: /reference/custom-attributes/custom-images
---

Custom images are used to add one or many images to Profile, Order, Customization, or Transactable.

## Defining

You can enable CustomImages by adding a CustomAttribute with `attribute_type` set to `photo` for example:

```yml
- name: avatar
  attribute_type: photo
```

## Version defaults

Each custom image upon creation is saved in three versions. Each version has a different predefined dimension and method used to resize the image.

The defaults are:

```json
  "mini": { "width": 56, "height": 56 },
  "thumb": { "width": 144, "height": 109 },
  "normal": { "width": 1280, "height": 960 }
```

You can alter width, height for each version with `versions_configuration`:

```yml
- name: avatar
  attribute_type: photo
  versions_configuration:
    normal:
      width: 300
      height: 300
```

## Form configuration

Custom Image attribute must be defined in a form to whitelist and validate the form request.

```yml
...
  custom_images:
    avatar:
      image:
        validation: {
          file_content_type: { allow: ['image/jpeg', 'image/png', 'image/gif'] }
        }
...
```

## Fields

Each image supports the following self-descriptive fields:

| Field name | Type   | Note                                                                 |
| ---------- | ------ | -------------------------------------------------------------------- |
| image      | String | image that has been sent via form - usually original input from user |

## Displaying, updating

After setting up images as described above, you can further customize image editing in the markup for the forms:

{% raw %}

```liquid
{% fields_for 'profiles' %}
  {% fields_for 'seller', form: 'profiles' %}
    {% fields_for 'custom_images', form: 'seller' %}
      {% fields_for 'avatar', form: 'custom_images' %}
        {% input 'image', as: 'image', form: 'avatar' %}
      {% endfields_for %}
    {% endfields_for %}
  {% endfields_for %}
{% endfields_for %}
```

{% endraw %}

The example above shows the predefined image tag.

## Using GraphQL to query for `CustomImage`

```graphql
query test_image_query {
  customizations {
    results {
      avatar: custom_image(name: "avatar") {
        normal: url(version: "normal")
        thumb: url(version: "thumb")
        transformed: url(version: "transformed")
      }
    }
  }
}
```
