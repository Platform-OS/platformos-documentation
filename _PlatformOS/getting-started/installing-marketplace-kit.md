---
title: Installing the Marketplace Kit
permalink: /get-started/installing-marketplace-kit
---

This guide will help you install the Platform OS Marketplace Kit, that allows you to easily deploy your configuration files and assets to our platform, and communicate with the Platform OS API.

## Requirements

To install the Marketplace Kit, you need NPM (Node.js Package Manager). See our tutorials for installing NPM on Mac or Windows:

* [Installing NPM on a Mac]()
* [Installing NPM on Windows]()

## Steps

Installing the Marketplace Kit is a two-step process:

1.  Install the Marketplace Kit using NPM
2.  Test the Marketplace Kit

### Step 1: Install the Marketplace Kit using NPM

Start your command-line tool (e.g. Terminal on a Mac, or Git Bash on Windows), and enter:

```
npm i -g @platform-os/marketplace-kit
```

You can follow the installation process in your command-line (something similar to this will be displayed during installation):

```
/usr/local/bin/marketplace-kit -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit
/usr/local/bin/marketplace-kit-env -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit-env
/usr/local/bin/marketplace-kit-archive -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit-archive
/usr/local/bin/marketplace-kit-env-add -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit-env-add
/usr/local/bin/marketplace-kit-deploy -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit-deploy
/usr/local/bin/marketplace-kit-env-list -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit-env-list
/usr/local/bin/marketplace-kit-push -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit-push
/usr/local/bin/marketplace-kit-sync -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit-sync
/usr/local/bin/marketplace-kit-watch -> /usr/local/lib/node_modules/@platform-os/marketplace-kit/marketplace-kit-watch
+ @platform-os/marketplace-kit@1.0.5
added 88 packages in 6.719s
```

### Step 2: Test the Marketplace Kit

Use the following command to test the Marketplace Kit:

```
marketplace-kit -V
```

If the Marketplace Kit has been installed correctly, running this command displays the version of your Marketplace Kit. If the Marketplace Kit hasn't been installed, running this command gives a `command not found` error.

## Next steps

Congratulations! You have installed the Marketplace Kit. You can now deploy and sync changes to your Instance.

* [Deploying and Syncing Changes]()

## Questions?

We are always happy to help with any questions you may have. Consult our [documentation](), [contact support](), or [connect with our sales team]().
