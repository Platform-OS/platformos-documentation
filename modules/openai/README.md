# platformOS OpenAI Module

The goal of this module is to provide backend for storing openai embeddings in platformOS and retrieve them.

## Installation

Currently suggested approach is to use git submodules. It will be replaced with pOS module manager in the feature. For now, ensure `modules` directory exists in your root directory and add a git submodule:

`mkdir modules && git submodule add --name openai git@github.com:Platform-OS/pos-module-openai.git modules/openai`

To update your modules to the newest version, use `git submodule update --recursive --remote`

## Usage

TBD

## Hooks

Currently there are no hooks

## Examples

TBD

## Versioning

```
git fetch origin --tags
npm version major | minor | patch
```

## Contribution

Please check `.git/CONTRIBUTING.md`
