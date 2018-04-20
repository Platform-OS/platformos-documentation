---
title: Create a Relationship
permalink: /reference/rest-api/relationships_post
---

To create a relationship send a POST request to /api/user/relationships

**HTTP request**

POST /api/user/relationships

**Parameters**

| Parameter               | Type               | Description                                                                       | Required | Notes                      |
| ----------------------- | ------------------ | --------------------------------------------------------------------------------- | -------- | -------------------------- |
| form_configuration_name | String             | Name of the form configuration                                                    | Required | underscored                |
| form                    | RelationshipForm   | RelationshipForm parameters that corresponds with FormConfiguration configuration | Required |                            |
| parent_resource_id      | ID (Int or String) | Id or name of definced RelationshipType                                           | Required | name should be underscored |

**Relationship Parameters**

{% include resources/RelationshipForm.html %}

**Example request**

{% include reference/request_headers.md %}

```json
{
  "form_configuration_name": "reference_rest_api_relationship_create",
  "parent_resource_id": "special_group",
  "form": {
    "properties": {
      "group_name": "Captains"
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

{% include reference/response_post_body.md %}

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_post.md %}
