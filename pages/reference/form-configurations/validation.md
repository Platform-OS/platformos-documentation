---
title: Form Configuration - Validation
permalink: /reference/form-configurations/validation
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
