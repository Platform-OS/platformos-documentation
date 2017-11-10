---
title: SMS Notification
permalink: /getting-started/notifications/smses
---

## Creating first SMS

We have done the integration part with Twilio for you. However, you need to take care that `to` number is formated according to [Twilio's phone number format guideline](https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers)

Analogically to the previous example, we will send sms to the user that signs up. However, we do not collect mobile number yet in the sign up form, so we will extend it first. Hence, we will add to developer sign up form `form_configurations/developer/sign_up.liquid`:

{% raw %}
```liquid
---
...
configuration:
...
  mobile_number:
    validation:
      presence: true
...
---
...
{% input mobile_number, placeholder: 'Please include country code' %}
...
```
{% endraw %}

Obviously, on the production one has to take into consideration that users might not now what is their country code, or what country code is at all. For simplicity in this example though, we will assume that the user provides correct input.

Now when we collect phone number, we can create a file in `notifications/sms_notifications/welcome_user.liquid` with content:

{% raw %}
```liquid
---
name: welcome_user
to: '{{ form.mobile_number }}'
delay: 0
enabled: true
trigger_condition: true
---
Hello {{ form.first_name }} via sms.
```
{% endraw %}

Last thing is to add newly created sms notification to the form:


{% raw %}
```liquid
---
...
sms_notifications:
  - welcome_user
---
...
```
{% endraw %}

{% include alert/important.html content="We do not send real sms-es on staging by default. However, because any error with sending real smses on staging might be more costly than sending emails, you do not have possibility to enable it yourself. If you want to test sms-es on staging, please [contact us](/contact-us)." %}
