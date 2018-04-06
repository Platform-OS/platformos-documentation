---
title: Create a Customization
permalink: /reference/rest-api/customizations_post
---
To create a customization send a POST request to /api/user/customizations

**HTTP request**

POST /api/user/customizations

**Parameters**

| Parameter | Type | Description | Required | Notes |
|---------------------|--------------------------------------------------------------------|-------------------------------------------------------------|------------------------|---------------------------------------------|
| form_configuration_name | String | Name of the form configuration | Required | underscored |
| form | CustomizationForm | CustomizationForm parameters that corresponds with FormConfiguration configuration | Required | |
| parent_resource_id | ID (Int or String) | Id or name of definced CustomizationType | Required | name should be underscored |

**Customization Parameters**

{% include resources/CustomizationForm.html %}

**Example request**

{% include reference/request_headers.md %}
```
{
  "form_configuration_name": "reference_rest_api_create_customization",
  "parent_resource_id": "links",
  "form": {
    "properties": {
      "url": "google.com"
    }
  }
}
```

| Element | Type | Description | Required? |
|------------------------------------|--------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------|
| form_configuration_name | String | Name of the defined FormConfiguration | Required |
| form | CustomizationForm | Attributes for user, should match configuration defined in corresponding FormConfiguration | Required |

**Example response**

{% include reference/response_headers.md %}
{% include reference/response_post_body.md %}


| Element | Type | Description |
|-------------------------------------|--------------------------------------------|----------------------------------------------------------------|
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […] | […] | […] |

{% include reference/error_and_status_codes_post.md %}
