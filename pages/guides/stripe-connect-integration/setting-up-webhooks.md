---
title: Setting up webhooks
permalink: /guides/stripe-connect-integration/setting-up-webhooks
---

This article will help you set up webhooks for your Stripe Connect Payment Gateway. The reason we need to do this is so that your marketplace doesn't need to pull information from Stripe, they will push important information to your marketplace when important events occur. [You can read more about Webhooks here](https://stripe.com/docs/webhooks).

**Please note:** there are 2 types of webhooks based on how your marketplace chooses to pay for the Stripe Processing Fees, [Platform](#platform-webhooks) and [Direct](#direct-webhooks). Please choose the correct webhook based on your marketplace.

Webhooks are sent by Stripe to notify NearMe platform about an event - for example, that merchant account was verified, or that transfer has been successful.

## Platform Webhooks

1. Login into your [Stripe Account](https://dashboard.stripe.com/) and choose _API_
  [![API page view in Stripe Dashboard](/assets/images/guides/payment-gateways/stripe-connect/file-6RRZ3kx8qD.png)](/assets/images/guides/payment-gateways/stripe-connect/file-6RRZ3kx8qD.png)
2. Choose Webhooks
  [![Webhooks tab view in Stripe Dashboard](/assets/images/guides/payment-gateways/stripe-connect/file-4v3eveT92Q.png)](/assets/images/guides/payment-gateways/stripe-connect/file-4v3eveT92Q.png)
3. Click on _Add endpoint..._ for _Endpoints receiving events from Connect applications_
  [![Add endpoint button on webhooks tab](/assets/images/guides/payment-gateways/stripe-connect/file-zRPWL6EChL.png)](/assets/images/guides/payment-gateways/stripe-connect/file-zRPWL6EChL.png)
4. Enter the following information
    1. URL: Marketplace URL and with **/webhooks/stripe_connect** at the end e.g. **[https://mymarketplace.near-me.com/webhooks/stripe_connect](https://mymarketplace.near-me.com/webhooks/stripe_connect)**
    2. Events to send: **Production**
    3. Filter Event: **Select types to send**
    4. Check the **account.updated** option
    5. Click _Add endpoint_ when finished and your webhook will be created.
    [![New sending webhook details view](/assets/images/guides/payment-gateways/stripe-connect/file-7mCTlftBKX.png)](/assets/images/guides/payment-gateways/stripe-connect/file-7mCTlftBKX.png)
5. We also need to set up a webhook for *your* account. So from _Step 3_ above, Click on _Add endpoint..._ for _Endpoints receiving events from your account_
  [![New webhook endpoint for receiving events](/assets/images/guides/payment-gateways/stripe-connect/file-FPzLn9Khgm.png)](/assets/images/guides/payment-gateways/stripe-connect/file-FPzLn9Khgm.png)
6. Enter the following information:
    1. URL: Marketplace URL and with **/webhooks/stripe_connect** at the end e.g. **[https://mymarketplace.near-me.com/webhooks/stripe_connect](https://mymarketplace.near-me.com/webhooks/stripe_connect)**
    2. Events to send: **Live Events**
    3. Filter Event: **Select types to send**
    4. Check the **transfer.updated** option
    5. Click _Add endpoint_ when finished and your webhook will be created.
    [![New receiving webhook details view](/assets/images/guides/payment-gateways/stripe-connect/file-rx5Fx3JOiM.png)](/assets/images/guides/payment-gateways/stripe-connect/file-rx5Fx3JOiM.png)

## Direct webhooks

1. Login into your [Stripe Account](https://dashboard.stripe.com/) and choose _API_
  [![API page view in Stripe Dashboard](/assets/images/guides/payment-gateways/stripe-connect/file-6RRZ3kx8qD.png)](/assets/images/guides/payment-gateways/stripe-connect/file-6RRZ3kx8qD.png)
2. Choose Webhooks
  [![Webhooks tab on API page in Stripe Dashboard](/assets/images/guides/payment-gateways/stripe-connect/file-4v3eveT92Q.png)](/assets/images/guides/payment-gateways/stripe-connect/file-4v3eveT92Q.png)
3. Click on _Add endpoint..._ for _Endpoints receiving events from Connect applications_
  [![Add endpoint button on webhooks tab](/assets/images/guides/payment-gateways/stripe-connect/file-zRPWL6EChL.png)](/assets/images/guides/payment-gateways/stripe-connect/file-zRPWL6EChL.png)
4. Enter following information
    1. URL: Marketplace URL and with **/webhooks/stripe_connect** at the end e.g. **[https://mymarketplace.near-me.com/webhooks/stripe_connect](https://mymarketplace.near-me.com/webhooks/stripe_connect)**
    2. Events to send: **Production**
    3. Filter Event: **Select types to send**
    4. Check the  **account.updated**, **transfer.created**, **transfer.failed**, and **transfer.paid** options
    5. Click _Add endpoint_ when finished and your webhook will be created.
    [![ALT_TEXT_HERE](/assets/images/guides/payment-gateways/stripe-connect/file-7mCTlftBKX.png)](/assets/images/guides/payment-gateways/stripe-connect/file-7mCTlftBKX.png)
5. We also need to set up a webhook for *your* account. So from _Step 3_ above, Click on _Add endpoint..._ for _Endpoints receiving events from your account_
  [![New webhook endpoint for receiving events](/assets/images/guides/payment-gateways/stripe-connect/file-FPzLn9Khgm.png)](/assets/images/guides/payment-gateways/stripe-connect/file-FPzLn9Khgm.png)
6. Enter the following information:
    1. URL: Marketplace URL and with **/webhooks/stripe_connect** at the end e.g. **[https://mymarketplace.near-me.com/webhooks/stripe_connect](https://mymarketplace.near-me.com/webhooks/stripe_connect)**
    2. Events to send: **Live Events**
    3. Filter Event: **Select types to send**
    4. Check the **transfer.updated** option
    5. Click _Add endpoint_ when finished and your webhook will be created.
    [![New receiving webhook details view](/assets/images/guides/payment-gateways/stripe-connect/file-rx5Fx3JOiM.png)](/assets/images/guides/payment-gateways/stripe-connect/file-rx5Fx3JOiM.png)
