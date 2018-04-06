---
title: Creating the Required Directory Structure
permalink: /get-started/creating-required-directory-structure
---

This guide will help you create the required directory structure with the [Blank Marketplace Module](https://github.com/mdyd-dev/module-blank-marketplace).

In order to correctly communicate with the Platform OS engine and API, your code base should be organized into a specific directory structure. The root directory of your project should contain the `marketplace_builder` directory. All directories other than the `marketplace_builder` will be ignored by the Marketplace Kit when deploying and syncing, so you can keep all your JS and CSS files outside of the `marketplace_builder` directory, and use any pre-processors you want to automatically generate the end result files in a proper path inside `marketplace_builder`.

## Requirements

You can create the required directory structure using the Blank Marketplace Module. To use this module, you have to have the Marketplace Kit installed on your computer.

* [Installing the Marketplace Kit]()

## Steps

Creating the required directory structure with the Blank Marketplace Module is a two-step process:

1.  Install the Blank Marketplace Module
2.  Explore your directory structure

### Step 1: Install the Blank Marketplace Module

To install the Blank Marketplace Module, enter:

```
npm i @platform-os/blank-marketplace
```

{% include alert/note.html content="Make sure you invoke this command where you have permissions to create a directory." %}

The installer asks you to enter the name of your marketplace. This information will be used to name the directory where the required directory structure will be installed.

### Step 2: Explore your directory structure

Once you've installed the required directory structure, locate and explore it—this is how your code base for your Platform OS Instances should be organized.

To learn more about the required directories and files, see [Platform OS Components]().

## Next steps

Congratulations! You have created the required file structure for your code base using the Blank Marketplace Module. You can now deploy and sync changes to your Instance.

* [Deploying and Syncing Changes]()

## Questions?

We are always happy to help with any questions you may have. Consult our [documentation](), [contact support](), or [connect with our sales team]().
