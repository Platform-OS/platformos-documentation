---
title: Update a Customization
permalink: /reference/rest-api/customizations_put
---

To update a customization, send a PUT request to /api/user/customizations/:customization_id

**HTTP request**

PUT /api/user/customizations/:customization_id

**Parameters**

| Parameter               | Type              | Description                                                                        | Required | Notes |
| ----------------------- | ----------------- | ---------------------------------------------------------------------------------- | -------- | ----- |
| form_configuration_name | String            | Name of the form configuration                                                     | Required |       |
| form                    | CustomizationForm | CustomizationForm parameters that corresponds with FormConfiguration configuration | Required |       |

**Customization Parameters**

{% include resources/CustomizationForm.html %}

**Example request**

{% include reference/request_headers.md %}

```json
{
  "form_configuration_name": "reference_rest_api_update_customization",
  "form": {
    "properties": {
      "url": "aol.com"
    }
  }
}
```

| Element                 | Type              | Description                                                                                | Required? |
| ----------------------- | ----------------- | ------------------------------------------------------------------------------------------ | --------- |
| form_configuration_name | String            | Name of the defined FormConfiguration                                                      | Required  |
| form                    | CustomizationForm | Attributes for user, should match configuration defined in corresponding FormConfiguration | Required  |

**Example response**

{% include reference/response_headers.md %}

{% include reference/response_put_body.md %}

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_put.md %}
