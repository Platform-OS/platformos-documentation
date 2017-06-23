---
title: Form Builder - Validation
tags: [tools marketplace_builder graphl formbuilder]
permalink: /reference/form-builder/validation
sidebar: reference_sidebar
folder: Form Builder
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
