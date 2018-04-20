---
title: Merchant Account Setup
permalink: /getting-started/payments/merchant-account-setup
---

Work in progress

Merchant account allow user in a system to get paid. We gonna use Stripe Connect.

# Create Merchant Account

To create merchant account for a user we need to build form:

{% raw %}

```liquid
---
name: user_merchant_account
resource: MerchantAccount
configuration:
  owners:
    current_address:
      street: { validation: { presence: true } }
      city: { validation: { presence: true } }
      state: { validation: { presence: true } }
      postcode: { validation: { presence: true } }
    attachements:
      validation:
        length:
          is: 2
          message: You need to include Front side and Back side Photo ID
  account_type:
    property_options:
      readonly: true
      default: individual
---

{% form, url: '/api/user/merchant_accounts', as: 'merchant_account' %}
  {% input_field 'account_type', as: 'hidden', value: 'individual' %}
  {% input_field 'currency', as: 'hidden', value: 'CAD' %}

  {% fields_for 'owners' %}
    {% fields_for 'attachements', form: 'owners' %}
    {% endfields_for %}
    {% fields_for 'current_address', form: 'owners' %}
    {% endfields_for %}
  {% endfields_for %}

  {% submit 'Save' %}
{% endform %}
```

{% endraw %}
