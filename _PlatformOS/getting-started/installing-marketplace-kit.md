---
title: Installing the Marketplace Kit
permalink: [/get-started/installing-marketplace-kit]
---
This guide will help you install the Platform OS Marketplace Kit, that allows you to easily deploy your configuration files and assets to our platform, and communicate with the Platform OS API. 

## Requirements
To install the Marketplace Kit, use our Docker image that has all dependencies installed. For this, you need Docker set up. See our tutorials for installing Docker on Mac or Windows: 

* [Installing Docker on a Mac]()
* [Installing Docker on Windows]()

## Steps 

Installing the Marketplace Kit is a two-step process:

*   Start and test Docker
*   Test and install the Marketplace Kit

### Step 1: Start and test Docker
Start Docker, and test it by entering the following commands in the command line:

```
# print version information for Docker client and server
docker version
```

```
# print list of Docker images
docker image ls
```

If Docker is up and running, you will see information displayed about your Docker version and your Docker images. 

### Step 2: Test and install Marketplace Kit with Docker 

Use the following command to test the Marketplace Kit using a Docker image. Docker automatically downloads the Marketplace Kit image, if it is not found on your system. 

```
# print Marketplace Kit version and exit
docker run --rm -it -v $PWD:/src platformos/marketplace-kit -v
```

If the Marketplace Kit image was not found, progress indicators show the status of pulling the image. When complete, the status message reads:

```
# Example: Marketplace Kit installation complete status message 
Status: Downloaded newer image for platformos/marketplace-kit:latest
marketplace-kit 0.2.4
```

Using the same command again displays the version of the Marketplace Kit image you installed.  

## Next steps
Congratulations! You have now installed the Marketplace Kit. You can now go on, and set up a site on Platform OS. 

* [Setting up a site on Platform OS]()

## Questions?

We are always happy to help with any questions you may have. Consult our  [documentation](), [contact support](), or  [connect with our sales team](). 
