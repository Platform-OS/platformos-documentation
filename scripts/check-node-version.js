#!/usr/bin/env node

const semver = require('semver');
const version = require('../package.json').engines.node;

if (!semver.satisfies(process.version, version)) {
  console.log(`Warning: Please update your node version (${process.version}) to at ${version}.`);
}
