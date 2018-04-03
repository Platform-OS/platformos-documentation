---
title: Create a Transactable
permalink: /reference/rest-api/transactables_post
---

To create a transactable send a POST request to /api/user/transactables

**HTTP request**

POST /api/user/transactables

**Parameters**

| Parameter               | Type               | Description                                                                       | Required | Notes                      |
| ----------------------- | ------------------ | --------------------------------------------------------------------------------- | -------- | -------------------------- |
| form_configuration_name | String             | Name of the form configuration                                                    | Required | underscored                |
| form                    | TransactableForm   | TransactableForm parameters that corresponds with FormConfiguration configuration | Required |                            |
| parent_resource_id      | ID (Int or String) | Id or name of definced TransactableType                                           | Required | name should be underscored |

**User Parameters**

{% include resources/TransactableForm.html %}

**Example request**

```
"authorization: Token token=192a8aee2e9c3bbd20e4e207506926c0"
"accept: application/json"
"content-type: application/json"
```

```
{
  "form_configuration_name": "reference_rest_api_create_transactable",
  "parent_resource_id": "boat",
  "form": {
    "name": "Boat"
    "creator_id": 1
  }
}
```

| Element                 | Type             | Description                                                                                | Required? |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------------------ | --------- |
| form_configuration_name | String           | Name of the defined FormConfiguration                                                      | Required  |
| form                    | TransactableForm | Attributes for user, should match configuration defined in corresponding FormConfiguration | Required  |

**Example response**

```
HTTP/1.1 201 Created
Content-Type: application/vnd.api+json
```

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
