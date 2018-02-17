---
title: Persist part of third party api response
permalink: /guides/persist-third-party-api-response/
---

Here is complete example of how to do it. We start by creating a new profile, let's call it `test_profile. We will also need a custom attribute to store the actual value from the api, let's call it `third_party_api_value`:
```
# instance_profile_types/default.yml
---
name: test_profile
custom_attributes:
- name: third_party_api_value
  attribute_type: string
```

Now we will need a test endpoint, which would simulate a third party api json response. It could look like this:

{% raw %}
```
# marketplace_builder/pages/test-endpoint.liquid
---
slug: test-endpoint
admin_page: false
format: json
layout_name: ''
---
{
  "third_party_api_id": "id-1"
}
```
{% endraw %}

The next step is to create api call notifcation, which should do two things:
1. send a request to http(s)://<your_domain>.com/test-endppoint
2. store the value from the response in custom attribute
This can look like this:


{% raw %}
```
# marketplace_builder/notifications/api_call_notifications/send_request.liquid
---
name: send_request
to: 'http://example.com/test-endpoint.json'
enabled: true
format: http
trigger_condition: true
request_type: GET
callback: "{%- assign response_json = response.body | to_hash -%}{% execute_query persist_in_custom_attribute, user_id: form.id, third_party_api_id: response_json.third_party_api_id %}"
headers: '{
  "Content-Type": "application/json"
}'
---
{
  "id": "{{ form.id }}"
}
```
{% endraw %}

Please make sure to replace `example.com` with your domain.

In the callback, we use `execute_query` tag, which invokes GraphQL mutation with provided arguments. In our example, the query accept two arguments - the `user_id`, which is the id of the user, which we want to update, and the `third_party_api_id` which is the value which we want to store. The content of graphql mutation file looks like this:
```
# marketplace_builder/graph_queries/persist_in_custom_attribute.graphql
mutation persist_in_custom_attribute($user_id: ID!, $third_party_api_id: String!) {
  user_update(
    id: $user_id,
    user: {
      profiles: [
        {
          name: "test_profile"
          values: { properties: [{ name: "third_party_api_value", value: $third_party_api_id }] }
        }
      ]
    }
    form_configuration_name: "callback_persist_in_custom_attribute"
  ) {
    id
  }
}
```

The mutation itself will pass the arguments to a form we called `callback_persist_in_custom_attribute`. We need to make sure that configuration includes the fields we want to persist. Please note: by re-using an idea of `form_configuration` here, you can then easily send additional emails, smses or even another api calls. All we want to do in this example though, is to store the value, so we will not add any extra notifications.

{% raw %}
```
# marketplace_builder/form_configurations/callback_persist_in_custom_attribute.liquid
---
name: callback_persist_in_custom_attribute
async_callback_actions:
base_form: UserForm
configuration:
  profiles:
    test_profile:
      properties:
        third_party_api_value:
---
```
{% endraw %}

Once we have api call notification defined, we should associate it with a form, to trigger it. That's why the next step iss creating a page, in which we will embed such form:

{% raw %}
```
# marketplace_builder/pages/test-form.liquid
---
slug: test-form
format: html
layout_name: ''
---
<h1>Form</h1>
{% render_form test_form, object_id: @current_user.id, object_class: 'User' %}
```
{% endraw %}

Now, let's create the form itself and associate it with our api call notification. Let's assume this is sign up form, which creates in the background `test_profile`.

{% raw %}
```
# marketplace_builder/form_configurations/test-form.liquid
---
name: test_form
base_form: UserForm
configuration:
  profiles:
    test_profile:
      enabled:
return_to: '/test-result'
api_call_notifications:
  - send_request
---
{% assign form_url = "/api/users/" | append: current_user.id  %}
{% form_for form, url: @form_url, html-class: 'form-a' %}
  {% input email %}
  {% input password %}
  {% fields_for profiles %}
    {% fields_for test_profile %}
      {% input_field enabled, input_html-value: "1", as: hidden %}
    {% endfields_for %}
  {% endfields_for %}
  <p class="action"> {% submit 'Save', class: 'button-a' %} </p>
{% endform_for %}
```
{% endraw %}

We are done! Once the user fills the sign up form, and there won't be any validation errors, we will proceed to trigger the api call notificaiton. If it is successfull, it will trigger the callback, in which we will have access to server's response via `response` variable. We will be able to access various things, like `response.code`, and the most important thing - `response.body`. The callback will run graphql mutation, which will use `form_configuration` to persist the data.

Now, the last thing we might want to do is to see the actual result In the `test_form` we have setup redirection to `/test-result`, so let's create this page and make it display `third_party_api_value`.

{% raw %}
```
# /pages/test-result.liquid
---
slug: test-result
admin_page: false
format: html
layout_name: ''
---
{% query_graph 'get_current_user_third_party_api_value', result_name: graph_current_user  %}
Third Party Api Value: for {{ graph_current_user.current_user.email }}: {{ graph_current_user.current_user.test_profile.third_party_api_value }}
```
{% endraw %}

which uses the following graphql query:

```
# marketplace_builder/graph_queries/get_current_user_third_party_api_value.graphql
query get_current_user_third_party_api_value {
  current_user {
    email
    test_profile: profile(profile_type: "test_profile") {
        third_party_api_value: property(name: "third_party_api_value")
    }
  }
}
```

Done! Now we can go to /test-form page, provide sign up details, click the save button. Initially we will not see the correct value - this is because the api call is triggered in the background, outside of the request lifecycle. This is important to not rely on a third party api availability. However, when you refresh after couple seconds, you will see that the value has been populated.
