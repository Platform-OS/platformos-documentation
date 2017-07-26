---
title: Required Information
permalink: /guides/stripe-connect-integration/required-information
---

The topic of _required_ information for Stripe Connect has been a hot topic lately.
There are a few things that go into how Stripe Connect can be integrated into a website / marketplace and how Near Me went about it:

## 1. What are the Minimum Verification Requirements and what are they (per country)?
This is the minimum amount of required information that it takes to open a managed account. The important word to note is 'open'. An account that is opened (and labeled verified by Stripe) can be disabled after a few transactions or if the transaction total is more than a few thousand dollars (or equivalent). Once this happens, the account cannot send or receive money until more information is gathered and the account is fully verified. The user will be contacted and will need to provide up to and including all of the Maximum Verification Requirements (see below). This is called the Stepped approach in verification.
The Minimum Verification Requirements vary from country to country and while it is possible for some merchants that the Minimum Verification Requirements are all that are ever needed, for others (and in our experience, the vast majority), more information is required and almost always it's the full list of Maximum Verification Requirements that end up being requested of a vendor.

## 2. What are the Maximum Verification Requirements and what are they (per country)?
This is the maximum amount of required information that it takes to fully verify a managed account. If all of the Maximum Verification Requirement information is provided, Stripe will fully verify an account with no additional information required from the user. This is called the Upfront approach and considered the better user experience as the user only has to fill out information 1 time. Near Me has chosen to use the Upfront approach in our Stripe Connect integration.

## 3. Can we reduce the required information?
It is not possible to reduce the Minimum or Maximum Verification Requirements, these requirements are controlled 100% by Stripe. Near Me does have the ability to choose to request this information via Stepped or Upfront approach however. Near Me has chosen the Upfront method, but can certainly customize marketplaces through work orders to change to a Stepped approach.

### Additional Notes
You can read more about the [Min / Max Requirements for Stripe Connect here](https://stripe.com/docs/connect/required-verification-information).
