---
title: Stripe Connect
permalink: /guides/payment_gateways/stripe-connect
---
# Required Information

The topic of 'required' information for Stripe Connect has been a hot topic lately.
There are a few things that go into how Stripe Connect can be integrated into a website / marketplace and how Near Me went about it:

1. **What are the Minimum Verification Requirements and what are they (per country)?**
This is the minimum amount of required information that it takes to open a managed account. The important word to note is 'open'. An account that is opened (and labeled verified by Stripe) can be disabled after a few transactions or if the transaction total is more than a few thousand dollars (or equivalent). Once this happens, the account cannot send or receive money until more information is gathered and the account is fully verified. The user will be contacted and will need to provide up to and including all of the Maximum Verification Requirements (see below). This is called the Stepped approach in verification.
The Minimum Verification Requirements vary from country to country and while it is possible for some merchants that the Minimum Verification Requirements are all that are ever needed, for others (and in our experience, the vast majority), more information is required and almost always it's the full list of Maximum Verification Requirements that end up being requested of a vendor.

2. **What are the Maximum Verification Requirements and what are they (per country)?**
This is the maximum amount of required information that it takes to fully verify a managed account. If all of the Maximum Verification Requirement information is provided, Stripe will fully verify an account with no additional information required from the user. This is called the Upfront approach and considered the better user experience as the user only has to fill out information 1 time. Near Me has chosen to use the Upfront approach in our Stripe Connect integration.

3. **Can we reduce the required information?**
It is not possible to reduce the Minimum or Maximum Verification Requirements, these requirements are controlled 100% by Stripe. Near Me does have the ability to choose to request this information via Stepped or Upfront approach however. Near Me has chosen the Upfront method, but can certainly customize marketplaces through work orders to change to a Stepped approach.

## Additional Notes
You can read more about the Min / Max Requirements for Stripe Connect here:  https://stripe.com/docs/connect/required-verification-information

# Setting up Stripe Connect

From your admin dashboard, navigate to Settings > Payments and select 'New Payment Gateway'

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58c7faf72c7d3a79f5f8badc/file-DzV0Zlkpjj.png)

From the dropdown select 'Stripe Connect' and click 'Save'

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58c7fb9edd8c8e7f5974981c/file-ZxJRHSA5qd.png)

You will then be brought to the page below where you may enable the payment gateway, enter Stripe Connect account keys, as well as other settings. If you haven't already, Go to  [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register) and sign up for a new Stripe account. Your Test Secret and Test Publishable Keys will be found in your Stripe Connect Account Dashboard (please see next step) Note: Be sure to select a payment method!

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58c9619add8c8e7f5974a1f6/file-7UY86yczOM.png)To find your Stripe Connect Keys, navigate to your Stripe Connect account dashboard and select 'API' from the list on the left. This will provide your test and live keys needed to set up your payment gateway on your marketplace. Copy/Paste the appropriate keys to the fields in the marketplace admin dash.
![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58c961e5dd8c8e7f5974a1fa/file-81lln0wLkv.png)

Finally, Select the countries you would like to be available for payments to be made to and click 'Save'. 
![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58c962d4dd8c8e7f5974a1ff/file-HO3FClam0b.png)

You will now be able to run test or live transactions on your marketplace!

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58c963b42c7d3a79f5f8c4be/file-0TyQgAhchS.png)

# Setting up Webhook

This article will help you set up a Webhook for your Stripe Connect Payment Gateway. The reason we need to do this is so that your marketplace doesn't need to pull information from Stripe, they will push important information to your marketplace when important events occur. You can read more about Webhooks here: [https://stripe.com/docs/webhooks](https://stripe.com/docs/webhooks)

**Please note:** there are 2 types of webhooks based on how your marketplace chooses to pay for the Stripe Processing Fees, Platform and Direct. Please choose the correct webhook based on your marketplace.

Webhooks are sent by Stripe to notify NearMe platform about an event - for example, that merchant account was verified, or that transfer has been successful.

## PLATFORM

### <u>Step 1</u>

Login into your Stripe Account at  [https://dashboard.stripe.com/](https://dashboard.stripe.com/) and choose API

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590897530428634b4a32c803/file-6RRZ3kx8qD.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590897530428634b4a32c803/file-6RRZ3kx8qD.png)

### <u>Step 2</u>

Choose Webhooks

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590898142c7d3a057f88ba1c/file-4v3eveT92Q.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590898142c7d3a057f88ba1c/file-4v3eveT92Q.png)

### **<u>Step 3</u>**

Click on 'Add endpoint...' for Endpoints receiving events from Connect applications

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590898e12c7d3a057f88ba26/file-zRPWL6EChL.png)

### **<u>Step 4</u>**

1\. URL: add the URL for your marketplace and then add **/webhooks/stripe_connect** at the end. For example, [https://example.com/webhooks/stripe_connect](https://example.com/webhooks/stripe_connect)

2\. Events to send: Production

3\. Filter Event: Select types to send 

4\. Check the box for **account.updated**

5\. Choose 'Add endpoint' when finished and your webhook will be created.

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089f190428634b4a32c883/file-7mCTlftBKX.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089f190428634b4a32c883/file-7mCTlftBKX.png)

### <u>Step 5</u>

1\. We also need to set up a webhook for YOUR account. So from <u>Step 3</u> above, Click on 'Add endpoint...' for Endpoints receiving events from your account

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089ba90428634b4a32c856/file-FPzLn9Khgm.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089ba90428634b4a32c856/file-FPzLn9Khgm.png)

### <u>Step 6</u>[](https://example.com/webhooks/stripe_connect)

1\. URL: add the URL for your marketplace and then add /webhooks/stripe_connect at the end. For example,  [https://example.com/webhooks/stripe_connect](https://example.com/webhooks/stripe_connect)

2\. Events to send: Live Events

3\. Filter Event: Select types to send 

4\. Check the box for  **transfer.updated**

5\. Choose 'Add endpoint' when finished and your webhook will be created.

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089d1b2c7d3a057f88ba70/file-rx5Fx3JOiM.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089d1b2c7d3a057f88ba70/file-rx5Fx3JOiM.png)



## Direct

### <u>Step 1</u>

Login into your Stripe Account at  [https://dashboard.stripe.com/](https://dashboard.stripe.com/) and choose API

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590897530428634b4a32c803/file-6RRZ3kx8qD.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590897530428634b4a32c803/file-6RRZ3kx8qD.png)

### <u>Step 2</u>

Choose Webhooks

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590898142c7d3a057f88ba1c/file-4v3eveT92Q.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590898142c7d3a057f88ba1c/file-4v3eveT92Q.png)

### **<u>Step 3</u>**

Click on 'Add endpoint...' for Endpoints receiving events from Connect applications

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590898e12c7d3a057f88ba26/file-zRPWL6EChL.png)

### **<u>Step 4</u>**

1\. URL: add the URL for your marketplace and then add /webhooks/stripe_connect at the end. For example,  [https://example.com/webhooks/stripe_connect](https://example.com/webhooks/stripe_connect)

2\. Events to send: Production

3\. Filter Event: Select types to send 

4\. Check the box for  **account.updated**, **transfer.created**, **transfer.failed**, and **transfer.paid**

5\. Choose 'Add endpoint' when finished and your webhook will be created.

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089f190428634b4a32c883/file-7mCTlftBKX.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089f190428634b4a32c883/file-7mCTlftBKX.png)

### <u>Step 5</u>

1\. We also need to set up a webhook for YOUR account. So from <u>Step 3</u> above, Click on 'Add endpoint...' for Endpoints receiving events from your account

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089ba90428634b4a32c856/file-FPzLn9Khgm.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089ba90428634b4a32c856/file-FPzLn9Khgm.png)

### <u>Step 6</u>[](https://example.com/webhooks/stripe_connect)

1\. URL: add the URL for your marketplace and then add /webhooks/stripe_connect at the end. For example,  [https://example.com/webhooks/stripe_connect](https://example.com/webhooks/stripe_connect)

2\. Events to send: Live Events

3\. Filter Event: Select types to send 

4\. Check the box for  **transfer.updated**

5\. Choose 'Add endpoint' when finished and your webhook will be created.

[![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089d1b2c7d3a057f88ba70/file-rx5Fx3JOiM.png)](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/59089d1b2c7d3a057f88ba70/file-rx5Fx3JOiM.png)

# Setting up Plaid

Setting up ACH payments via Stripe / Stripe Connect using an account with [Plaid.com](https://plaid.com/) can be done in just a few simple steps. 

**Please note, you will need to sign up or have an existing Stripe account and have set up your Stripe or Stripe Connect integration on your marketplace first. For more information on setting up a Stripe or Stripe Connect payment gateway, please click  [HERE](http://support.near-me.com/article/81-integrating-stripe) (Stripe) or [HERE](http://support.near-me.com/article/565-integrating-stripe-connect)** **(Stripe Connect).**

Once that is complete, simply follow the steps below to set up ACH Payments on your Near Me marketplace.



## <u>I. Sign up for an account at Plaid.com</u>

A. go to [https://dashboard.plaid.com/signup/stripe](https://dashboard.plaid.com/signup/stripe) and sign up for an account

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ef6d7ddd8c8e5c57315d7b/file-kBG6CMlMqu.png)

B. Confirm your email

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebe802dd8c8e5c5731447e/file-M9M8IZy0AK.png)

C. You can Skip 'Step 2, Invite teammates' if you want, it is optional and doesn't affect the setup ![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebf4332c7d3a52b42f5bad/file-7f7XTvT4ST.png)

D. Locate your API Keys by clicking on 'Step 3, Send your first request' ![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebe7e72c7d3a52b42f5b09/file-GfUI2nLFCH.png)

You'll need these API Keys for later:

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebe885dd8c8e5c57314488/file-D5QzDiwMap.png)

**IMPORTANT NOTE: At this point you have a Free account with Plaid and can use the Sandbox Server to test and the Development Server for your first 100 users. You can move on to Part II - Connect your Plaid.com and Stripe.com accounts and complete the set up using the SandBox or Development Servers. Once you reach 100 users or you are ready to begin your paid Plaid account, you'll return need to complete the next steps and apply for it via  [Plaid.com](https://plaid.com/).**

E. The final step for your paid Plaid account is to Contact  [Plaid.com](https://plaid.com/) and request that your account be Upgraded to access their production (LIVE) environment. You can do this on 'Step 4, Remove User Limits'

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebeb9ddd8c8e5c573144b3/file-Vqly5f4sF9.png)

This will open up a form to fill that needs to be filled out with information about your company and how you plan on using the product. You'll want to provide these answers to the following questions on the form:

1.  What are you building: **Marketplace**
2.  What products do you plan to use: Auth: **routing/account number authentication**
3.  How many users: **0-500**

Once you submit this form for approval, you will receive an email notification from Plaid letting you know when your account has been upgraded. At this point you'll want to move your Environment from Development to Production in your marketplace's Admin Dash. 



## <u>II. Connect your Plaid.com and Stripe.com accounts</u>

A. While Plaid is reviewing your upgrade application, we'll want to go ahead and connect your Plaid.com and Stripe.com accounts. To do this we will need to follow the instructions in Step 1 on this page:  [https://plaid.com/docs/link/stripe/#instructions](https://plaid.com/docs/link/stripe/#instructions) (Looks like image below).

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ef6ca42c7d3a52b42f74f2/file-ytv501qq2E.png)



## <u>III. Add your API keys to your Stripe Connect / ACH integration</u>

A. In your Admin Dash, go to Settings > Payments and click on the pencil for your Stripe Connect integration to enter the detail view ![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebe9fcdd8c8e5c57314499/file-JztUpvqpNL.png)

B. In the Stripe Connect detail view, (1) enable the ACH functionality (2) Add the client_id (3) Add the public_key (4) Add the secret per your API information from the Plaid.com website and (5) finally enter the environment you wish to connect to. (Sandbox if your marketplace is in test mode, Development if your marketplace is LIVE and you have a free account with Plaid and finally Production if you have a LIVE marketplace and your have a paid Plaid account).

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590b22030428634b4a32d8dc/file-qqHjSAQSB3.png)

C. Your setup is now complete.

## <u>Additional Links</u>

[https://blog.plaid.com/link-copy-customization/](https://blog.plaid.com/link-copy-customization/)
	Setting up ACH payments via Stripe / Stripe Connect using an account with
	<a href="https://plaid.com/" target="_blank">Plaid.com</a> can be done in just a few simple steps.&nbsp;
</p>
<p>
	<strong>Please note, you will need to sign up or have an existing Stripe account and have set up your Stripe or Stripe Connect integration on your marketplace first. For more information on setting up a Stripe or Stripe Connect payment gateway, please click&nbsp;
	<a href="http://support.near-me.com/article/81-integrating-stripe" target="_blank">HERE</a> (Stripe) or&nbsp;<a href="http://support.near-me.com/article/565-integrating-stripe-connect" target="_blank">HERE</a></strong><strong> (Stripe Connect).</strong>
</p>
<p>
	Once that is complete, simply follow the steps below to set up ACH Payments on your Near Me marketplace.
</p>
<hr>
<h3><u>I. Sign up for an account at Plaid.com</u></h3>
<p>
	A. go to
	<a href="https://dashboard.plaid.com/signup/stripe">https://dashboard.plaid.com/signup/stripe</a> and sign up for an account
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ef6d7ddd8c8e5c57315d7b/file-kBG6CMlMqu.png">
</p>
<p>
	B. Confirm your email
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebe802dd8c8e5c5731447e/file-M9M8IZy0AK.png">
</p>
<p>
	C. You can Skip 'Step 2, Invite teammates' if you want, it is optional and doesn't affect the setup
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebf4332c7d3a52b42f5bad/file-7f7XTvT4ST.png">
</p>
<p>
	D. Locate your API Keys by clicking on 'Step 3, Send your first request'
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebe7e72c7d3a52b42f5b09/file-GfUI2nLFCH.png">
</p>
<p>
	You'll need these API Keys for later:
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebe885dd8c8e5c57314488/file-D5QzDiwMap.png">
</p>
<p>
	<strong>
	IMPORTANT NOTE: At this point you have a Free account with Plaid and can use the Sandbox Server to test and the Development Server for your first 100 users. You can move on to Part II -&nbsp;Connect your Plaid.com and Stripe.com accounts and complete the set up using the SandBox or Development Servers. Once you reach 100 users or you are ready to begin your paid Plaid account, you'll return need to complete the next steps and apply for it via&nbsp;
	<a href="https://plaid.com/" target="_blank">Plaid.com</a>.</strong>
</p>
<p>
	E.&nbsp;The final step for your paid Plaid account is to Contact&nbsp;
	<a href="https://plaid.com/" target="_blank">Plaid.com</a> and request that your account be Upgraded to access their production (LIVE) environment. You can do this on 'Step 4, Remove User Limits'
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebeb9ddd8c8e5c573144b3/file-Vqly5f4sF9.png">
</p>
<p>
	This will open up a form to fill that needs to be filled out with information about your company and how you plan on using the product. You'll want to provide these answers to the following questions on the form:
</p>
<ol>
	<li>What are you building:<strong> Marketplace</strong></li>
	<li>What products do you plan to use: Auth:<strong> routing/account number authentication</strong></li>
	<li>How many users:<strong> 0-500</strong></li>
</ol>
<p>
	Once you submit this form for approval, you will receive an email notification from Plaid letting you know when your account has been upgraded. At this point you'll want to move your Environment from Development to Production in your marketplace's Admin Dash.&nbsp;
</p>
<hr>
<h3>
<u>II. Connect your Plaid.com and Stripe.com accounts</u></h3>
<p>
	A. While Plaid is reviewing your upgrade application, we'll want to go ahead and connect your Plaid.com and Stripe.com accounts. To do this we will need to follow the instructions in Step 1 on this page:&nbsp;
	<a href="https://plaid.com/docs/link/stripe/#instructions">https://plaid.com/docs/link/stripe/#instructions</a>  (Looks like image below).
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ef6ca42c7d3a52b42f74f2/file-ytv501qq2E.png">
</p>
<hr>
<h3><u>III. Add your API keys to your Stripe Connect / ACH integration</u></h3>
<p>
	A. In your Admin Dash, go to Settings &gt; Payments and click on the pencil for your Stripe Connect integration to enter the detail view
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/58ebe9fcdd8c8e5c57314499/file-JztUpvqpNL.png">
</p>
<p>
	B. In the Stripe Connect detail view, (1) enable the ACH functionality (2) Add the client_id (3) Add the public_key (4) Add the secret per your API information from the Plaid.com website and (5) finally enter the environment you wish to connect to. (Sandbox if your marketplace is in test mode, Development if your marketplace is LIVE and you have a free account with Plaid and finally Production if you have a LIVE marketplace and your have a paid Plaid account).
</p>
<p>
	<img src="https://s3.amazonaws.com/helpscout.net/docs/assets/5706615bc697917553cf6cb1/images/590b22030428634b4a32d8dc/file-qqHjSAQSB3.png">
</p>
<p>
	C. Your setup is now complete.
</p>
<hr>
<h3><u>Additional Links</u></h3>
<p>
	<a href="https://blog.plaid.com/link-copy-customization/" target="_blank">https://blog.plaid.com/link-copy-customization/</a>
</p>
<hr>
