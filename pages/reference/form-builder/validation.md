---
title: Form Builder - Validation
permalink: /reference/form-builder/validation
---

## Example
```
validation:
  presence: true
  unique:
    scope:
      - customizable_type
      - properties: giger_slug
    message: Invitation already sent
```
