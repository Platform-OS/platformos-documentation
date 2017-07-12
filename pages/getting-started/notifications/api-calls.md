---
title: Api Call Notification
permalink: /getting-started/notifications/api-calls
---

# Creating first api call

The last notification type is api call. The principle is the same as with previous examples. We first create api call notification by adding `notifications/api_call_notifications/ping_example_com_on_user_sign_up.liquid`:

{% raw %}
```liquid
---
name: ping_example_com_on_user_sign_up
to: 'https://example.com/endpoint/{{ form.id }}'
delay: 0
enabled: true
format: http
trigger_condition: true
request_type: POST
headers: '{
  "Content-Type": "application/json"
}'
---
{
  "first_name": "{{ form.first_name }}",
  "id": "{{ form.id }}"
}
```
{% endraw %}

This defines a POST request to the endpoint with newly created user's id in it. Please note that we do not store the response - it is fire and forget. In this example the body of the request is JSON, and to notify the endpoint about it, we have set the content-type header to be application/json. The very last thing again is connecting this api call notification with the form `form_configurations/developer/sign_up.liquid`:

{% raw %}
```liquid
---
...
api_call_notifications:
  - ping_example_com_on_user_sign_up
---
...
```
{% endraw %}

And that's it. Whenever user successfully sign ups, the example.com will be notified.

Please note - we do not send api calls on staging by default. Please contact us if you want to change this behaviour.
