---
title: Form Builder
permalink: /reference/form-configurations-static/
---

Form Configuration is a concept, which gives you full control on both the look&feel of a form, along with behavior.

* [Validations](/reference/form-configurations/validation)

## Setting form notice/alert values through FormConfiguration

It's possible have values for `flash` messages as part of form configuration, for example:

```yml
---
name: lister_general
base_form: UserForm
configuration:
  flash:
    alert: "Form Saved!"
    notice: "Validation error, please correct and save again"
```

### Interpolation

Values for `flash` keys are processed using Liquid parser so can be interpolated in the context of current form:

```yml

---
name: lister_general
base_form: UserForm
configuration:
  flash:
    alert: "Form Saved! {{ 'created_successfully' | t: first_name: current_user.first_name }} "
    notice: "Validation {{ 'error' | capitalize }}, please correct and save again"
```
