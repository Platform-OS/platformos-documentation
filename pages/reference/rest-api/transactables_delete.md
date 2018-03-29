---
title: Delete Transactable
permalink: /reference/rest-api/transactables_delete
---
To logout user, send a DELETE request to /api/user/transactables/:transactable_id

**HTTP request**

DELETE /api/user/transactables/:transactable_id

**Parameters**

| Parameter | Type | Description | Required | Notes |
|---------------------|--------------------------------------------------------------------|-------------------------------------------------------------|------------------------|---------------------------------------------|
| form_configuration_name | String | Name of the form configuration | Required ||

**Example request**

```
"authorization: Token token=192a8aee2e9c3bbd20e4e207506926c0"
"accept: application/json"
"content-type: application/json"
```
```
{
  "form_configuration_name": "reference_rest_api_delete_transactables",
}
```

| Element | Type | Description | Required? |
|------------------------------------|--------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------|
| form_configuration_name | String | Name of the defined FormConfiguration | Required |

**Example response**

```
HTTP/1.1 204 No Content
Content-Type: application/vnd.api+json
```
```
```

| Element | Type | Description |
|-------------------------------------|--------------------------------------------|----------------------------------------------------------------|
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […] | […] | […] |

{% include reference/error_and_status_codes_delete.md %}
