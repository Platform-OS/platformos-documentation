---
title: Setting up Plaid
permalink: /guides/stripe-connect-integration/setting-up-plaid
---

Setting up ACH payments via Stripe / Stripe Connect using an account with [Plaid.com](https://plaid.com/) can be done in just a few simple steps.

**Important note:** You will need to sign up or have an existing Stripe account and have set up your Stripe or Stripe Connect integration on your marketplace first. You can find more information on [setting up a Stripe integration](http://support.near-me.com/article/81-integrating-stripe) or [setting up a Stripe Connect integration](http://support.near-me.com/article/565-integrating-stripe-connect) on our support site\*\*.

Once that is complete, simply follow the steps below to set up ACH Payments on your Platform OS marketplace.

## Sign up for an account at Plaid.com

1.  Go to [Plaid registration page](https://dashboard.plaid.com/signup/stripe) and sign up for a new account
    [![Plaid registration page](/assets/images/guides/payment-gateways/stripe-connect/file-kBG6CMlMqu.png)](/assets/images/guides/payment-gateways/stripe-connect/file-kBG6CMlMqu.png)
2.  Confirm your email
    [![Confirm email option](/assets/images/guides/payment-gateways/stripe-connect/file-M9M8IZy0AK.png)](/assets/images/guides/payment-gateways/stripe-connect/file-M9M8IZy0AK.png)
3.  You can Skip _Invite teammates_ step if you want, it is optional and doesn't affect the setup
    [![Invite teammates option](/assets/images/guides/payment-gateways/stripe-connect/file-7f7XTvT4ST.png)](/assets/images/guides/payment-gateways/stripe-connect/file-7f7XTvT4ST.png)
4.  Locate your API Keys by clicking on _Send your first request_
    [![Send your first request option](/assets/images/guides/payment-gateways/stripe-connect/file-GfUI2nLFCH.png)](/assets/images/guides/payment-gateways/stripe-connect/file-GfUI2nLFCH.png)
    You'll need these API Keys for later:
    [![API keys screen](/assets/images/guides/payment-gateways/stripe-connect/file-D5QzDiwMap.png)](/assets/images/guides/payment-gateways/stripe-connect/file-D5QzDiwMap.png)
    **Important note:** At this point you have a Free account with Plaid and can use the Sandbox Server to test and the Development Server for your first 100 users. You can move on to [Connect your Plaid.com and Stripe.com accounts](#connect-your-plaidcom-and-stripecom-accounts) and complete the set up using the SandBox or Development Servers. Once you reach 100 users or you are ready to begin your paid Plaid account, you'll return need to complete the next steps and apply for it via [Plaid.com](https://plaid.com/)

5.  The final step for your paid Plaid account is to Contact [Plaid.com](https://plaid.com/) and request that your account be Upgraded to access their production (LIVE) environment. You can do this under _Remove User Limits_
    [![Remove User Limits option](/assets/images/guides/payment-gateways/stripe-connect/file-Vqly5f4sF9.png)](/assets/images/guides/payment-gateways/stripe-connect/file-Vqly5f4sF9.png)
    This will open up a form to fill that needs to be filled out with information about your company and how you plan on using the product. You'll want to provide these answers to the following questions on the form:
    1.  What are you building: **Marketplace**
    2.  What products do you plan to use: Auth: **routing/account number authentication**
    3.  How many users: **0-500**

Once you submit this form for approval, you will receive an email notification from Plaid letting you know when your account has been upgraded. At this point you'll want to move your Environment from Development to Production in your marketplace's Admin Dash.

## Connect your Plaid.com and Stripe.com accounts

While Plaid is reviewing your upgrade application, we'll want to go ahead and connect your Plaid.com and Stripe.com accounts. To do this we will need to follow the instructions in Step 1 on this page:  [https://plaid.com/docs/link/stripe/#instructions](https://plaid.com/docs/link/stripe/#instructions) (Looks like image below).

[![Stripe instructions for Plaid accounts](/assets/images/guides/payment-gateways/stripe-connect/file-ytv501qq2E.png)](/assets/images/guides/payment-gateways/stripe-connect/file-ytv501qq2E.png)

## Add your API keys to your Stripe Connect / ACH integration

1.  In your Admin Dash, go to _Settings > Payments_ and click on the pencil for your Stripe Connect integration to enter the detail view
    [![Edit option for Stripe Connect payment gateway](/assets/images/guides/payment-gateways/stripe-connect/file-JztUpvqpNL.png)](/assets/images/guides/payment-gateways/stripe-connect/file-JztUpvqpNL.png)
2.  In the Stripe Connect detail view,
    1.  enable the ACH functionality
    2.  Add the client_id
    3.  Add the public_key
    4.  Add the secret per your API information from the Plaid.com website and
    5.  Finally enter the environment you wish to connect to. (Sandbox if your marketplace is in test mode, Development if your marketplace is LIVE and you have a free account with Plaid and finally Production if you have a LIVE marketplace and your have a paid Plaid account).
        [![Stripe Connect setup screen](/assets/images/guides/payment-gateways/stripe-connect/file-qqHjSAQSB3.png)](/assets/images/guides/payment-gateways/stripe-connect/file-qqHjSAQSB3.png)

Your setup is now complete.

## Additional Links

* [Introducing customizable copy in Link on Plaid.com](https://blog.plaid.com/link-copy-customization/)
