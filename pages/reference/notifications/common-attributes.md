---
title: General Information
permalink: /reference/notifications/general
---
All notifications are defined inside `notifications` directory. Then, depending what type of the notification you would like to define, you have three subdirectories:

1. email_notifications - contain all email notifications
2. sms_notifications - contain all sms notifications
3. api_calls - contain all api call notifiations

There are differences in terms of what properties each of the configuration accepts, but some of the concepts are common:

* to  - depending on the alert type, it is either an email address of the recipient, a mobile number of the recipient or an endpoint for the api call. Accepts liquid.
* delay - it is a number of minutes by which the notification should be delayed. Default 0, which means no delay.
* enabled -  boolean which defines whether alert should be invoked or not. If false, it will be simply ignored. Defaults to true.
* trigger_condition - it adds possibility to add liquid condition to control whether notification should be delivered or not. The only value that allows notification to be delivered is `true`. Example usage dould be {% raw %}`{% if form.properties.a_custom_attribute == 'some_value'%}true{% endif %}`{% endraw %} - this code will trigger the notification only if value of 'a_custom_attribute' is equal to 'some_value'. Defaults to true, which means if you skip it, the notification will be sent (unless enabled is false)
