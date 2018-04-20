---
title: Create a Relationship User
permalink: /reference/rest-api/relationship_users_post
---

To create a relationship user send a POST request to /api/user/relationship_users

**HTTP request**

POST /api/user/relationship_users

**Parameters**

| Parameter               | Type                 | Description                                                                           | Required | Notes                      |
| ----------------------- | -------------------- | ------------------------------------------------------------------------------------- | -------- | -------------------------- |
| form_configuration_name | String               | Name of the form configuration                                                        | Required | underscored                |
| form                    | RelationshipUserForm | RelationshipUserForm parameters that corresponds with FormConfiguration configuration | Required |                            |
| parent_resource_id      | ID (Int or String)   | Id or name of definced RelationshipUserType                                           | Required | name should be underscored |

**Relationship Parameters**

{% include resources/RelationshipUserForm.html %}

**Example request**

{% include reference/request_headers.md %}

```json
{
  "form_configuration_name": "reference_rest_api_relationship_user_create",
  "parent_resource_id": "special_group_users",
  "form": {
    "relationship_id": 1,
    "user_id": 2,
    "properties": {
      "status": "active"
    }
  }
}
```

| Element                 | Type                 | Description                                                                                | Required? |
| ----------------------- | -------------------- | ------------------------------------------------------------------------------------------ | --------- |
| form_configuration_name | String               | Name of the defined FormConfiguration                                                      | Required  |
| form                    | RelationshipUserForm | Attributes for user, should match configuration defined in corresponding FormConfiguration | Required  |

**Example response**

{% include reference/response_headers.md %}

{% include reference/response_post_body.md %}

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_post.md %}
