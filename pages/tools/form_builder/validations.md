---
title: FormBuilder - Validations
keywords: formbuilder
tags: [tools marketplace_builder formbuilder]
permalink: formbuilder-validations.html
sidebar: tools_sidebar
---

validations in form builder

{% raw %}
    validation:
      presence: true
      unique:
        scope:
          - customizable_type
          - properties: giger_slug
        message: Invitation already sent
{% endraw %}