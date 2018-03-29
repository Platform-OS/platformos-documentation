---
title: Login User
permalink: /reference/rest-api/sessions_post
---
To login user, send a POST request to /api/sessions

**HTTP request**

POST /api/sessions

**Parameters**

| Parameter | Type | Description | Required | Notes |
|---------------------|--------------------------------------------------------------------|-------------------------------------------------------------|------------------------|---------------------------------------------|
| form_configuration_name | String | Name of the form configuration | Required ||
| form | SessionForm | User email and password | Required | |

**Session Parameters**

{% include resources/SessionForm.html %}

**Example request**

```
"authorization: Token token=192a8aee2e9c3bbd20e4e207506926c0"
"accept: application/json"
"content-type: application/json"
```
```
{
  "form_configuration_name": "reference_rest_api_create_sessions",
  "form": {
    "email": "example1@platformos.com",
    "password": "somepassword"
  }
}
```

| Element | Type | Description | Required? |
|------------------------------------|--------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------|
| form_configuration_name | String | Name of the defined FormConfiguration | Required |
| form | SessionForm | User email and password | Required |

**Example response**

```
HTTP/1.1 201 Created
Content-Type: application/vnd.api+json
```
```
{}
```

| Element | Type | Description |
|-------------------------------------|--------------------------------------------|----------------------------------------------------------------|
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […] | […] | […] |

{% include reference/error_and_status_codes_post.md %}
