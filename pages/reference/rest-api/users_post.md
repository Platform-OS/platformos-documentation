---
title: Create a User
permalink: /reference/rest-api/users_post
---

To create a user, send a POST request to /api/users

**HTTP request**

POST /api/users

**Parameters**

| Parameter               | Type     | Description                                                               | Required | Notes |
| ----------------------- | -------- | ------------------------------------------------------------------------- | -------- | ----- |
| form_configuration_name | String   | Name of the form configuration                                            | Required |       |
| form                    | UserForm | UserForm parameters that corresponds with FormConfiguration configuration | Required |       |

**User Parameters**

{% include resources/UserForm.html %}

**Example request**

{% include reference/request_headers.md %}

```
{
  "form_configuration_name": "reference_rest_api_create_user",
  "form": {
    "first_name": "Example",
    "email": "example1@platformos.com",
    "password": "somepassword"
  }
}
```

| Element                 | Type     | Description                                                                                | Required? |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------ | --------- |
| form_configuration_name | String   | Name of the defined FormConfiguration                                                      | Required  |
| form                    | UserForm | Attributes for user, should match configuration defined in corresponding FormConfiguration | Required  |

**Example response**

{% include reference/response_headers.md %}

```
{
  model: {
    id: 1
  },
  errors: {}
}
```

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_post.md %}
