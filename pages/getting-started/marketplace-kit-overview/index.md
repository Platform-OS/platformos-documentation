---
title: Marketplace Kit Overview
permalink: /getting-started/marketplace-kit-overview/
---
Marketplace Kit is a ruby gem, which was developed to allow you to easily deploy your configuration files and assets to NearMe Platform. It expects you to follow certain file structure in order to correctly communicate with NearMe API. You do not have to use it, however it is highgly recommended to do it. It is a CLI tool, hence you are expected to have basic knowledge in working with Terminal.

There are three main commands available. All commands should be run in the project root directory - i.e. one level above `maretplace_builder` directory. Before each command you have to specify which endpoint you want to use - usually it will be either `staging` or `production`, however you can follow your own naming convetion (for example, `<project name>-production` and `<project-name>-staging`, in  case you are working on multiple projects at the same time and want an extra safety check to avoid deploying the wrong project).

Pelase note, you need to be authenticated user in order to use this gem. You can authenticate by running any marketplace-kit command, which will prompt you for your email and password. If credentails are valid, and the user with this email address is instance admin, the commands will be processed. You will be remebmered for 14 days.

1. Pushing changes to NearMe Platform
```
marketplace-kit deploy -e <endpoint>
```
Deploys all the changes. Deleted files will be taken into consideration, and proper resources will be deleted from the platform as well. Hence, it is recommended to first deploy to `staging`, test, and only then trigger to production. Effectively, deploy creates a zip file containning all your files and sends to API. It is then processed in the background. Each zip file is stored by us, in order to allow you to rollback in case something goes wrong.

2. Updating configuration files based on current state
```
marketplace-kit pull -e <endpoint>
```
Pulls all configuration files from selected endpoint. You will want to use this command to initialize new repository. It is also useful in case non technical people use Web UI to change configuration files or copy.

3. Update endpoint on every change
```
marketplace-kit sync -e <endpoint>
```
Enables sync mode - immediately pushes changes made to filesystem to the proper endpoint. Feels like working on localhost. For obvious reason, it is dangerous to use on production on live marketplace - recommended to use only for staging. Please note, that unlike `deploy`, this command will not delete resources when you delete the file.

In the next section we will describe the file structure.
