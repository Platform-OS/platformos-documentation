---
title: Create a Relationship User
permalink: /reference/rest-api/relationship_users_put
---
To update a relationship, send a PUT request to /api/user/relationship_users/:relationship_user_id

**HTTP request**

PUT /api/user/relationship_users/:relationship_user_id

**Parameters**

| Parameter | Type | Description | Required | Notes |
|---------------------|--------------------------------------------------------------------|-------------------------------------------------------------|------------------------|---------------------------------------------|
| form_configuration_name | String | Name of the form configuration | Required ||
| form | RelationshipUserForm | RelationshipUserForm parameters that corresponds with FormConfiguration configuration | Required | |

**Transactable Parameters**

{% include resources/RelationshipUserForm.html %}

**Example request**

{% include reference/request_headers.md %}
```
{
  "form_configuration_name": "reference_rest_api_relationship_update",
  "form": {
    "properties": {
      "status": "not_verified"
    }
  }
}
```

| Element | Type | Description | Required? |
|------------------------------------|--------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------|
| form_configuration_name | String | Name of the defined FormConfiguration | Required |
| form | RelationshipUserForm | Attributes for user, should match configuration defined in corresponding FormConfiguration | Required |

**Example response**

{% include reference/response_headers.md %}
```
{}
```

| Element | Type | Description |
|-------------------------------------|--------------------------------------------|----------------------------------------------------------------|
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […] | […] | […] |

{% include reference/error_and_status_codes_put.md %}
