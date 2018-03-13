---
title: [TITLE, brief description of what the endpoint does, format: VERB a(n)/all NOUN(s), e.g. Update an Image]
permalink: [link, e.g. /apis/api1_endpoint1]
---
To [TITLE, e.g. update an image], [what the user should do, e.g. send a PUT request to /v2/images/$IMAGE_ID.]

**HTTP request**

[GET, PUT, POST, or DELETE and URL—e.g., PUT [base URL]/v2/images/$IMAGE_ID.] 

**Parameters**

[Table that lists all query and path parameters for the endpoint. If this endpoint has query and path parameters, consider listing them in separate tables—one for path parameters, one for query parameters. If there aren’t any parameters for this endpoint, replace the table with “None”]

| Parameter | Type | Description | Required | Notes |
|---------------------|--------------------------------------------------------------------|-------------------------------------------------------------|------------------------|---------------------------------------------|
| [Name of parameter] | [Type of parameter, e.g. Array, Object, String, Integer, or Float] | [Brief description of parameter function. What does it do?] | [Required or Optional] | [Additional information, e.g. image format] |
| […] | […] | […] | […] | […] |

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

**Error and Status Codes**	

| Code | Message | Meaning |
|----------------------|---------------------------------------------|-----------------------------------------------------------|
| [HTTP or error code] | [Message for the code, such as “Not Found”] | [Brief description of what the code means within our API] |
| […] | […] | […] |
