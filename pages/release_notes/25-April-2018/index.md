---
title: April 25, 2018 — Release Notes
permalink: /release-notes/25-April-2018/
---

There was a separation between Partner Portal accounts with write/deploy rights and admins on the instances that were created by partner with those rights.

We are introducing improvement that will get rid off this confusion and connect Partner Portal account permissions with actual permissions to deploy code to the instances.

## Call to action

### Update marketplace-kit

Update your marketplace-kit to version above 2.0.0.

    npm i -g @platform-os/marketplace-kit

### Use Partner Portal credentials

Add new environment using `marketplace-kit env add` command

    marketplace-kit env add staging --email email@example.com --url https://example.near-me.com

please provide your _Partner Portal_ credentials (not instance account credentials, as in older versions).

You have the same permissions as you can see on your [Partner Portal permissions page](https://portal.apps.near-me.com/me/permissions).

{% include alert/warning content="Keep in mind that marketplace-kit in versions prior to 2.0 will be deprecated at some point in time, so please upgrade as soon as possible." %}
