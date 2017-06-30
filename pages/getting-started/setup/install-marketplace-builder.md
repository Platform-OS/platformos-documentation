---
title: Install Marketplace Builder
summary: "Installing Marketplace Builder gem"
permalink: /getting-started/setup/install-marketplace-builder
---
## Installation

To install Marketplace Builder you need to install ruby gem via `gem install nearme-marketplace`

## Recommended workflow
1. Create a new git repository for your marketplace
2. Inside newly created repository, create `marketplace_builder` directory
3. Create `marketplace_builder/.endpoints` - this is main configuration file. It should contain your authentication token, staging host and url host with corresponding API keys, like this:

```json
    {
      "user_key": "your_user_key",
      "staging": {
        "url": "https://<project_domain>.staging-<region>.near-me.com/",
        "api_key": "xxx"
      },
      "production": {
        "url": "https://<project_domain>.<region>.near-me.com/",
        "api_key": "xxx"
      }
    }
```
4. Pull current configuration via `nearme-marketplace pull` (see below) and start customizing!

Please note - to obtain `user_key`, please contact NearMe Support - currently there is no way to obtain it on your own.
The host to production and staging are visible in channel partner portal. API key can be generated at `/instance_admin/settings/api_keys`.

## Usage

All commands should be run in the project root directory. Before each command you have to specify which endpoint should be used - `staging` or `production` - via environment variable.

    ENDPOINT=<endpoint> nearme-marketplace pull

Pulls all configuration files from specified end point. It is great to initialize new repository, as well as make sure that all changes via UI will not overwritten

    ENDPOINT=<endpoint> nearme-marketplace deploy

Deploys all the changes. It is recommended to first deploy to `staging`, test, and only then trigger to production

    nearme-marketplace sync

Enables sync mode - immediately pushes changes made to filesystem to the proper endpoint. Feels like working on localhost. Dangerous to use on production on live marketplace - recommended to use only for staging.
