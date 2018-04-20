---
title: Create a Credit Card
permalink: /reference/rest-api/credit_cards_post
---

To create a credit card send a POST request to /api/user/credit_cards

**HTTP request**

POST /api/user/credit_cards

**Parameters**

| Parameter               | Type           | Description                                                                     | Required | Notes       |
| ----------------------- | -------------- | ------------------------------------------------------------------------------- | -------- | ----------- |
| form_configuration_name | String         | Name of the form configuration                                                  | Required | underscored |
| form                    | CreditCardForm | CreditCardForm parameters that corresponds with FormConfiguration configuration | Required |             |

**CreditCard Parameters**

{% include resources/CreditCardForm.html %}

**Example request**

{% include reference/request_headers.md %}

```json
{
  "form_configuration_name": "reference_rest_api_credit_card_create",
  "form": {
    "credit_card_token": "abc123",
    "payment_method_id": 1
  }
}
```

| Element                 | Type           | Description                                                                                | Required? |
| ----------------------- | -------------- | ------------------------------------------------------------------------------------------ | --------- |
| form_configuration_name | String         | Name of the defined FormConfiguration                                                      | Required  |
| form                    | CreditCardForm | Attributes for user, should match configuration defined in corresponding FormConfiguration | Required  |

**Example response**

{% include reference/response_headers.md %}

{% include reference/response_post_body.md %}

| Element                             | Type                                       | Description                                                    |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| [Element as it appears in response] | [Array, Object, String, Integer, or Float] | [Brief description of what information the element represents] |
| […]                                 | […]                                        | […]                                                            |

{% include reference/error_and_status_codes_post.md %}
