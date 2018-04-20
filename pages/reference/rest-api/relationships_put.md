---
title: Update a Relationship
permalink: /reference/rest-api/relationships_put
---

To update a relationship, send a PUT request to /api/user/relationships/:relationship_id

**HTTP request**

PUT /api/user/relationships/:relationship_id

**Parameters**

| Parameter               | Type             | Description                                                                       | Required | Notes |
| ----------------------- | ---------------- | --------------------------------------------------------------------------------- | -------- | ----- |
| form_configuration_name | String           | Name of the form configuration                                                    | Required |       |
| form                    | RelationshipForm | RelationshipForm parameters that corresponds with FormConfiguration configuration | Required |       |

**Transactable Parameters**

{% include resources/RelationshipForm.html %}

**Example request**

{% include reference/request_headers.md %}

```json
{
  "form_configuration_name": "reference_rest_api_relationship_update",
  "form": {
    "properties": {
      "group_name": "Senior Captains"
    }
  }
}
```

| Element                 | Type             | Description                                                                                | Required? |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------------------ | --------- |
| form_configuration_name | String           | Name of the defined FormConfiguration                                                      | Required  |
| form                    | RelationshipForm | Attributes for user, should match configuration defined in corresponding FormConfiguration | Required  |

**Example response**

{% include reference/response_headers.md %}

{% include reference/response_put_body.md %}

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_put.md %}
