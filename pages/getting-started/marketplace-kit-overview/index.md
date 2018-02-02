---
title: Marketplace Kit Overview
permalink: /getting-started/marketplace-kit-overview/
---
Marketplace Kit is a ruby gem, which was developed to allow you to easily deploy your configuration files and assets to the NearMe Platform. It expects you to follow a certain file structure in order to correctly communicate with the NearMe API. You do not have to use it, however it is highly recommended that you do. It is a CLI tool, hence you are expected to have basic knowledge in working with Terminal.

There are three main commands available. All commands should be run in the project root directory - i.e. one level above `marketplace_builder` directory. Before each command you have to specify which endpoint you want to use - usually it will be either `staging` or `production`, however you can follow your own naming convention (for example, `<project name>-production` and `<project-name>-staging`, in  case you are working on multiple projects at the same time and want an extra safety check to avoid deploying the wrong project).

Configuration for environments lays down in `marketplace_builder/.builder` file. There is also `marketplace_builder/.builder.example` which you can use as inspiration.

Please note that you need to be an authenticated user in order to use this gem. You can authenticate by running any marketplace-kit command, which will prompt you for your email and password. If credentails are valid, and the user with this email address is an instance admin, the commands will be processed. You will be remembered for 14 days.

1. Pushing changes to the NearMe Platform
```
marketplace-kit deploy -e <endpoint>
```
Deploys all the changes. Deleted files will be taken into consideration, and proper resources will be deleted from the platform as well. Hence, it is recommended to first deploy to `staging`, test, and only then trigger to production. Effectively, deploy creates a zip file containning all your files and sends it to API. It is then processed in the background. Each zip file is stored by us, in order to allow you to rollback in case something goes wrong.

2. Updating configuration files based on current state
```
marketplace-kit pull -e <endpoint>
```
Pulls all configuration files from selected endpoint. You will want to use this command to initialize new repository. It is also useful in case non technical people use Web UI to change configuration files or copy.

3. Update endpoint on every change
```
marketplace-kit sync -e <endpoint>
```
Enables sync mode - immediately pushes changes made to filesystem to the proper endpoint. It feels like working on localhost. For obvious reason, it is dangerous to use on production, on a live marketplace - it is recommended to use it only for staging. Please note, that unlike `deploy`, this command will not delete resources when you delete the file.

4. Deploy with force flag (`-f`)
If you want to deploy the whole `marketplace_builder` directory to environment overriding everything there was, no matter if the file has changed or not, use `-f` flag.
Keep in mind, it will also remove files from the server that are not present in your source directory. 
```
marketplace-kit deploy -e <endpoint> -f
```

In the next section we will describe the file structure.


### More info

[RubyGems](https://rubygems.org/gems/marketplace-kit) - Versions, dependencies

[Github](https://rubygems.org/gems/marketplace-kit) - Source code, short version of this guide 
