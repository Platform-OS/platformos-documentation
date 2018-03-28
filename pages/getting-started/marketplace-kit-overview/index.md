---
title: Marketplace Kit Overview
permalink: /getting-started/marketplace-kit-overview/
---

Marketplace Kit is command line tool, which was developed to allow you to easily deploy your configuration files and assets to the Platform OS. It expects you to follow a certain file structure in order to correctly communicate with the Platform OS API. You do not have to use it, however it is highly recommended that you do. It is a CLI tool, hence you are expected to have basic knowledge in working with Terminal.

There are three main commands available. All commands should be run in the project root directory - i.e. one level above `marketplace_builder` directory.

Note: marketplace-kit requires nodejs >= v8 to work properly. [Read more on how to install node on your platform](https://nodejs.org/en/download/).

1.  Authenticating

To add your environment to a config file you need to run `env add` command and authenticate with your credentials.

```
marketplace-kit env add <environment> --email <your email> --url <your marketplace url>
```

Configuration for environments lays down in `.marketplace-kit` file.

2.  Pushing changes to the Platform OS

```
marketplace-kit deploy <endpoint>
```

Example: `marketplace-kit deploy staging`

Deploys all the changes. It is recommended to first deploy to `staging`, test, and only then trigger to production. Effectively, deploy creates a zip file containning all your files and sends it to API. It is then processed in the background. Each zip file is stored by us, in order to allow you to rollback in case something goes wrong.

3.  Watching changes

```
marketplace-kit sync <endpoint>
```

Example: `marketplace-kit sync staging`

Enables sync mode - immediately pushes changes made to filesystem to the proper endpoint. It feels like working on localhost. For obvious reason, it is dangerous to use on production, on a live marketplace - it is recommended to use it only for staging. Please note, that unlike `deploy`, this command will not delete resources when you delete the file.

4.  Deploying with force flag (`-f` or `--force`)

If you want to deploy the whole `marketplace_builder` directory to environment overriding everything there was, use `-f` flag.
Note: It will also remove files from the server that are not present in your currently deployed source directory.

```
marketplace-kit deploy <endpoint> -f
```

Example: `marketplace-kit deploy staging -f`

In the next section we will describe the file structure.
