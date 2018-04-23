---
title: Form Builder
permalink: /reference/form-configurations-static/flash-messages
---

## Setting form notice/alert values through FormConfiguration

It's possible have values for `flash` messages as part of form configuration, for example:

```yml
---
name: signup_form
resource: User
configuration:
  email:
  password:
flash_notice: You have successfully signed up
flash_alert: Please fix validation errors
---
```

### Interpolation

Values for `flash` keys are processed using Liquid parser so can be interpolated in the context of current form:

```yml
---
name: signup_form
resource: User
configuration:
  email:
  password:
  first_name:
    validation: { presence: true }
flash_notice: 'Thank you {% raw %}{{ form.first_name }}{% endraw %}, you have successfully signed up!'
flash_alert: Please fix validation errors
---
```

{% include alert/note.html content="Quotes around the value of flash_notice are required if you interpolate liquid code inside YAML" %}
