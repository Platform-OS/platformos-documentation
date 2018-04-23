---
title: Form Configuration - Validation
permalink: /reference/form-configurations-static/validation
---

## Example

```yml
validation:
  presence: true
  unique:
    scope:
      - customizable_type
      - properties: customer_slug
    message: Invitation already sent
```
