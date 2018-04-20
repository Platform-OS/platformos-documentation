---
title: Logout User
permalink: /reference/rest-api/sessions_delete
---

To logout user, send a DELETE request to /api/sessions

**HTTP request**

DELETE /api/sessions

**Parameters**

| Parameter               | Type   | Description                    | Required | Notes |
| ----------------------- | ------ | ------------------------------ | -------- | ----- |
| form_configuration_name | String | Name of the form configuration | Required |       |

**Example request**

{% include reference/request_headers.md %}

```json
{
  "form_configuration_name": "reference_rest_api_delete_sessions"
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
