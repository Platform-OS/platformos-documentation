---
title: April 17, 2018 — Release Notes
permalink: /release-notes/17-April-2018/
---

Couple from our BC partners signalised that they are missing BC equivalent of `{{ this }}` in liquid. And this is what we have come up with based on the examples and requirements provided.

One use case of using it would be to define two different api keys for both staging and production and deciding which one to use in liquid.

### Example

{% raw %}

```liquid
{% if context.environment == 'production' %}
  {% assign API_KEY = 'production_api_key' %}
{% else %}
  {% assign API_KEY = 'staging_api_key' %}
{% endif %}
```

{% endraw %}

## What's new

### Based on community feedback

* **context variable**: access it using `{% raw %}{{ context }}{% endraw %}` - equivalent of `this`
* **page variable**: access it using `{% raw %}{{ page }}{% endraw %}`

Example test page:

{% raw %}

```liquid
---
slug: context
---

Context:<br/>
{{ context | json }}

<br/><br/>

Page:
{{ page }}
```

{% endraw %}

Example output from requesting `context?my-full-name=Pawel+Kowalski`:

### Context

```json
{
  "authenticity_token": "1cNbojCOzyZFD7738bczSgLYX9VJt+RGDe6P563UZSF4I973PL2GqsG/0rmcHGbUILpcf2flQUo+uLjwrtbQlQ==",
  "current_user": {
    "email": "pawel@near-me.com",
    "external_id": null,
    "id": 107756,
    "slug": "pawel"
  },
  "headers": {
    "SERVER_NAME": "pawel-test.staging-oregon.near-me.com",
    "REQUEST_METHOD": "GET",
    "PATH_INFO": "/context",
    "REQUEST_URI": "/context?my-full-name=Pawel+Kowalski",
    "HTTP_HOST": "pawel-test.staging-oregon.near-me.com",
    "HTTP_USER_AGENT":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
    "SERVER_PORT": "443",
    "QUERY_STRING": "my-full-name=Pawel+Kowalski"
  },
  "flash": {},
  "params": {
    "my-full-name": "Pawel Kowalski",
    "language": null,
    "controller": "pages",
    "action": "show",
    "slug": "context"
  },
  "environment": "staging",
  "is_xhr": null
}
```

### Page

```
{"slug"=>"context", "id"=>2729, "redirect_to"=>nil, "redirect_code"=>nil}
```
