---
title: Create a User
permalink: /reference/rest-api/users
---
To create a user, send a POST request to /api/users

**HTTP request**

POST /api/users 

**Parameters**

| Parameter | Type | Description | Required | Notes |
|---------------------|--------------------------------------------------------------------|-------------------------------------------------------------|------------------------|---------------------------------------------|
| form_configuration_name | String | Name of the form configuration | Required ||
| form | UserForm | UserForm parameters that corresponds with FormConfiguration configuration | Required | |

**User Parameters**

{% include resources/UserForm.html %}

**Example request**

[Example of a complete request for this endpoint, including header and body, followed by a table that lists each element in the example request]

```
[Example: Request headers] 	
```
```
[Example: Request body]	
```

| Element | Type | Description | Required? |
|------------------------------------|--------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------|
| [Element as it appears in request] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents, including default and valid values] | [Required or Optional] |
| […] | […] | […] | […] | 

**Example response**

[Example of a complete response for this endpoint, followed by a table that lists each element in the example response]	

```
[Example: Response headers]	
```
```
[Example: Response body]	
```

| Element | Type | Description |
|-------------------------------------|--------------------------------------------|----------------------------------------------------------------|
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […] | […] | […] |

{% include reference/error_and_status_codes.md %}
