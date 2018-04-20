---
title: Delete Relationship User
permalink: /reference/rest-api/relationship_users_delete
---

To remove relationship user, send a DELETE request to /api/user/relationship_users/:relationship_user_id

**HTTP request**

DELETE /api/user/relationship_users/:relationship_user_id

**Parameters**

| Parameter               | Type   | Description                    | Required | Notes |
| ----------------------- | ------ | ------------------------------ | -------- | ----- |
| form_configuration_name | String | Name of the form configuration | Required |       |

**Example request**

{% include reference/request_headers.md %}

```json
{
  "form_configuration_name": "reference_rest_api_relationship_user_delete"
}
```

| Element                 | Type   | Description                           | Required? |
| ----------------------- | ------ | ------------------------------------- | --------- |
| form_configuration_name | String | Name of the defined FormConfiguration | Required  |

**Example response**

{% include reference/response_headers.md %}

```

```

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_delete.md %}
