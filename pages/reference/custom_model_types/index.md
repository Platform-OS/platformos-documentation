---
title: Custom Model Types
permalink: /reference/custom-model-types/
---

Custom Model Types have multiple usages.

* You can think of it as a custom DB table, which allows you to build very customized features
* You can use it to group custom attributes and allow user to provide multiple values for each of them

### Custom Model Type definition

* definitions are placed within `custom_model_types` directory

* example below shows BlogPost custom model type:

  ```yml
  ---
  name: blog_post
  custom_attributes:
  - name: title
   attribute_type: string
  - name: content
   attribute_type: text
  ---
  ```

# Form configuration

Custom Model Type works well with From Configuration. You will find detailed description and all available options in the sections below:

* [Default Payload](/reference/form-configurations-static/default_payload#custom-model-example)
