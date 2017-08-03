---
title: Install Marketplace Kit
summary: "Installing Marketplace Kit gem"
permalink: /getting-started/setup/install-marketplace-kit
---
## Installation

To install Marketplace Kit you need to install ruby gem via `gem install nearme-marketplace`

## Recommended workflow
1. Create a new git repository for your marketplace
2. Inside newly created repository, create `marketplace_kit` directory
3. Create `marketplace_kit/.endpoints` - this is main configuration file. It should contain your authentication token, staging host and url host with corresponding API keys, like this:

```json
{
  "staging": "https://<project_domain>.staging-<region>.near-me.com/"
  "production": "https://<project_domain>.<region>.near-me.com/"
}
```
4. Pull current configuration via `nearme-marketplace pull` and start customizing!

