---
title: API Call Notification
permalink: /getting-started/notifications/api-calls
---

## Creating first API call

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

And that's it. Whenever user successfully sign ups, the `https://example.com/endpoint/{{ form.id }}` endpoint will be notified.


{% include alert/important.html content="We do not send api calls on staging by default. Please contact us if you want to change this behaviour." %}


## Parsing Api Response

If you would like to do something a response, for example store part of the response in custom attribute for later reference, you can easily do it using graph mutations in `callback`, since you are able to access response body via `response.body`. Assuming the api returns json like:
```json
{
  "third_party_api_id": "id-1"
}
```
and you want store the `third_party_api_id` value (which is `id-1`), the complete example would look as following. First, you need to create a custom attribute in user profile (we will use `default_profile` in this example). Then, you should add graphql mutation:

```graphql
# marketplace_builder/graphql_queries/store_third_party_api_id.graphql
mutation store_third_party_api_id($user_id: ID!, $third_party_api_id: String!) {
  user_update(
    id: $user_id,
    user: {
      profiles: [
        {
          name: "default"
          values: { properties: [{ name: "third_party_api_id", value: $third_party_api_id }] }
        }
      ]
    }
    form_configuration_name: "callback_third_party_api_id"
  ) {
    id
  }
}
```

This mutation provides input for the form configuration called `callback_third_party_api_id`, so let's create it:


```yaml
# marketplace_builder/form_configurations/callback_third_party_api_id.liquid
---
name: callback_third_party_api_id
base_form: UserForm
configuration:
  profiles:
    default:
      properties:
        third_party_api_id:
---
```

Last, but not least, you need to extend api call notification by adding proper callback, which executes the mutation with the input received form the third party API:

{% raw %}
```liquid
# marketplace_builder/notifications/api_call_notifications/ping_example_com_on_user_sign_up.liquid
---
name: ping_example_com_on_user_sign_up
to: 'https://example.com/endpoint/{{ form.id }}'
callback: "{%- assign response_json = response.body | to_hash -%}{% execute_query persist_custom_attribute, id: form.id, custom_attribute_value: response_json.third_party_api_id %}"
...
---
...
```
{% endraw %}

