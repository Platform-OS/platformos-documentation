---
title: General Information
permalink: /reference/notifications/
---

All notifications are defined inside `notifications` directory.

Then, depending what type of the notification you would like to define, you should have three subdirectories:

1. `email_notifications` - contain all email notifications
2. `sms_notifications` - contain all sms notifications
3. `api_calls` - contain all api call notifiations

{% include alert/note.html content="If for any reason subdirectory you need to use does not exist, just create it." %}

There are differences in terms of what properties each of the configuration accepts, but some of the concepts are common:

Property | Description | Default | Example
--- | --- | --- | ---
`to` | Depending on the alert type, it is either: {::nomarkdown}<ul><li>an email address of the recipient</li><li>mobile number of the recipient</li><li>endpoint for the api call</li></ul>{:/} Accepts liquid. | n/a | `test@email.com`
`delay` | Number of minutes by which the notification should be delayed. | 0 | 2
`enabled` | Boolean which defines whether alert should be invoked or not. If false, it will be simply ignored. | true | false
`trigger_condition` | Liquid condition to control whether notification should be sent or not. The only value that allows notification to be delivered is `true`. If you skip it, the notification will be sent (unless enabled is false) | true | {% raw %}`{% if should_send == 'some_value'%}true{% endif %}`{% endraw %} - this code will trigger the notification only if value of `should_send` is equal to 'some_value'.

{% include alert/important.html content="`to` property is required. Without a destination point none notification can be sent." %}