---
title: [API name] Introduction
permalink: [link, e.g. /apis/api1_introduction]
---
Welcome to the [API name] documentation!

The [API name] [API type, e.g. REST] API allows you to [describe what the API does + test mode, live mode, what you need to get started, e.g. API key, etc.].
 
We send information on new additions and changes to our API to our Channel Partner Mailing List. Be sure to [subscribe]() to stay informed.
 
The API documentation starts with a general overview about the design and technology we implemented, followed by reference information about specific endpoints.

**Base URL**

All URLs referenced in the documentation have the following base:
[Base URL]

**Requests**

[Describe how the API communicates: HTTP, HTTPS, URLs]
[Describe authentication]

| Method | Usage |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GET | For simple retrieval of information use the GET method. The information you request will be returned to you as a [type of object, e.g. JSON or XML] object. |
| DELETE | To remove a resource, use the DELETE method. It will remove the object that is specified in the request if it is found. If it is not found, the operation will return a response indicating the object was not available. |
| PUT | To update information about a resource, use the PUT method. |
| POST | To create a new object, use the POST method. The POST request needs to contain all the necessary information for creating a new object. |
| […] |  |

**HTTP Statuses** 

Along with the HTTP methods that the API responds to, it also returns standard HTTP statuses, including error codes.
The status contains the error code, while the body of the response usually contains additional information about the problem.

| Error code | Meaning |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200 OK | The request was successful. |
| 201 CREATED | The request was successful, a new resource has been created. |
| 204 OK | The request was successful, the resource specified in the request has been deleted. |
| 302 FOUND | Redirect response. [...] |
| 304 NOT MODIFIED | The resource has not been modified since the version specified by the respective request headers. There is no need to retransmit the resource as the client still has a previously-downloaded copy. |
| 400 BAD REQUEST | The data given in the POST or PUT failed validation. See the response body for details. |
| 401 UNAUTHORIZED | The supplied credentials, if any, are not sufficient to create or update the resource. |
| 404 NOT FOUND | The specified resource could not be found. |
| 405 METHOD NOT ALLOWED | You can't request POST or PUT methods to modify the resource. |
| 429 TOO MANY REQUESTS | Your app is sending too many simultaneous requests to the server. |
| 500 SERVER ERROR | The request has failed because of server error. Please try to send the request later. |
| 503 SERVICE UNAVAILABLE | The server is temporarily unable to respond to the request. Please try to send the request later. |

```
[Example error response]
```

**Responses** 

When a request is successful, the API sends back a [response object format, e.g. JSON] object as the response body. [Optional: exceptions, e.g. DELETE, description of additional response formats if applicable]

[Other details about responses, e.g keys, meta]

[Explanation of example response]

```
[Example responses:
1. Response for a single object
2. Response for an object collection]
```

**Parameters**

[Describe how to pass parameters in a request with the API, e.g. JSON object key-value pairs, query attributes]	

```
[Sample object]	
```

**Limits**

[Describe rate limits, e.g. the number of possible API requests with the same OAuth token, rate limiting information in response headers, concurrency rate limiting]

```
[Sample rate limit headers, sample rate exceeded response]	
```

**Authentication**

[Describe ways to authenticate]
[API keys]

```
[Examples: Authenticate with a bearer authorization header, Authenticate with basic authentication]	
```	
