---
title: Email Notification
permalink: /getting-started/notifications/emails
---

## Creating first email

Let's assume we want to send a welcome email to the newly signed up user. To do it, firstly we create a file in
`notifications/email_notifications/welcome_user.liquid` with content:

{% raw %}

```liquid
---
name: welcome_user
to: '{{ form.email }}'
delay: 0
enabled: true
trigger_condition: true
from: no-reply@example.com
reply_to: no-reply@example.com
cc:
bcc:
subject: 'Welcome {{ form.first_name }} in our marketplace!'
layout_path: mailer
---
<h1>Hi {{ form.first_name }}!</h1>

<p>Welcome in our marketplace!</p>
```

{% endraw %}

{% include alert/note.html content="See [reference](/reference/notifications) for more detailed information." %}

Then all we need to do is to edit `form_configurations/developer/sign_up.liquid` file to associate this email with it:

```yaml
---
name: developer_sign_up
base_form: UserForm
...
email_notifications:
  - welcome_user
---
...
```

And that's it. Please note: if you are working on staging environment, you also need to configure test email - you can
do it via the instance admin in the browser, the path is `/instance_admin/settings/configuration#instance_test_email`.
The reason is that we intercept all emails on staging to avoid spamming real users during tests. Now, when you submit
the form, the newly registered user should receive the email. Please take a look at
[full Notification documentation](/reference/notifications) to get an overview of how to control when notification
should be sent.

## Using Email Layouts

The next step when working with emails is providing a layout. The concept is the same as with the layout for pages. The
default layout file for all emails is located at `liquid_views/layouts/mailer.liquid`. It's content is slightly
different though then the layout for pages, because it needs to be marked as email layout. A sample minimal content
looks like this:

{% raw %}

```liquid
---
view_type: mail_layout
---
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <!-- it is good practice for emails to include inline styles rather than css. They can go here. -->
  </head>
  <body>
    Header

    {{ content_for_layout }}

    Footer

  </body>
</html>
```

{% endraw %}

Again, the key thing in the layout is the {% raw %}`{{ content_for_layout }}`{% endraw %}, which injects the body
defined in email notification into the layout. Without it, you would be sending layout without actual content.
