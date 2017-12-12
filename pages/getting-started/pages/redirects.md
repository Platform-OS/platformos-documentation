---
title: Redirects
permalink: /getting-started/pages/redirects
---
By using Page, you can also implement redirects. Here is example how you can redirect /my-page to /other-page using 302 status:
{% raw %}
```yaml
---
slug: my-page
redirect_url: '/other-page'
redirect_code: 302
---
```
{% endraw %}

* slug - defines the url at which this page will be accessible. In this example, assuming your marketplace domain is https://example.com, you will be able to access the page at https://example.com/about.
* redirect_url - endpoint to which you want user to be redirected
* redirect_code  - specifies the status of redirection. Can be either 301 (Moved Permanently) or 302 (Found)
