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

```
"authorization: Token token=192a8aee2e9c3bbd20e4e207506926c0"
"accept: application/json"
"content-type: application/json"
```

```
{
  "form_configuration_name": "reference_rest_api_delete_sessions"
}
```

| Element                 | Type   | Description                           | Required? |
| ----------------------- | ------ | ------------------------------------- | --------- |
| form_configuration_name | String | Name of the defined FormConfiguration | Required  |

**Example response**

```
HTTP/1.1 204 No Content
Content-Type: application/vnd.api+json
```

```

```

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_delete.md %}
