---
title: Marketplace Kit Overview
permalink: /getting-started/marketplace-kit-overview/
---

Marketplace Kit is a ruby gem, which was developed to allow you to easily deploy your configuration files and assets to the NearMe Platform. It expects you to follow a certain file structure in order to correctly communicate with the NearMe API. You do not have to use it, however it is highly recommended that you do. It is a CLI tool, hence you are expected to have basic knowledge in working with Terminal.

There are three main commands available. All commands should be run in the project root directory - i.e. one level above `marketplace_builder` directory. Before each command you have to specify which endpoint you want to use - usually it will be either `staging` or `production`, however you can follow your own naming convention (for example, `<project name>-production` and `<project-name>-staging`, in case you are working on multiple projects at the same time and want an extra safety check to avoid deploying the wrong project).

To add your environment to a config file you need to run `env add` command and authenticate with your credentials.

```
marketplace-kit env add <environment> --email <your email> --url <your marketplace url>
```

Configuration for environments lays down in `.marketplace-kit` file.

1.  Pushing changes to the NearMe Platform

```
marketplace-kit deploy <endpoint>
```

Deploys all the changes. Deleted files will be taken into consideration, and proper resources will be deleted from the platform as well. Hence, it is recommended to first deploy to `staging`, test, and only then trigger to production. Effectively, deploy creates a zip file containning all your files and sends it to API. It is then processed in the background. Each zip file is stored by us, in order to allow you to rollback in case something goes wrong.

2.  Update endpoint on every change

```
marketplace-kit sync <endpoint>
```

Enables sync mode - immediately pushes changes made to filesystem to the proper endpoint. It feels like working on localhost. For obvious reason, it is dangerous to use on production, on a live marketplace - it is recommended to use it only for staging. Please note, that unlike `deploy`, this command will not delete resources when you delete the file.

4.  Deploy with force flag (`-f` or `--force`)
    If you want to deploy the whole `marketplace_builder` directory to environment overriding everything there was, no matter if the file has changed or not, use `-f` flag.
    Keep in mind, it will also remove files from the server that are not present in your currently deployed source directory.

```
marketplace-kit deploy <endpoint> -f
```

In the next section we will describe the file structure.
