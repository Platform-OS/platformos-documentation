---
title: Install Marketplace Kit
summary: "Installing Marketplace Kit gem"
permalink: /getting-started/setup/install-marketplace-kit
---
## Installation

To install Marketplace Kit you need to install ruby gem via `gem install marketplace-kit`

## Recommended workflow
1. Create a new git repository for your marketplace
2. Inside newly created repository, create `maretplace_builder` directory
3. Create `maretplace_builder/.builder` - this is main configuration file. It should contain your authentication token, staging host and url host with corresponding API keys, like this:

```json
{
  "staging": {
    "url": "https://<project_domain>.staging-<region>.near-me.com/"
  },
  "production": {
    "url": "https://<project_domain>.<region>.near-me.com/"
  }
}
```
4. Pull current configuration via `marketplace-kit pull`. You will be prompted to provide your email and password. Once done, you will be able to start customizing!


