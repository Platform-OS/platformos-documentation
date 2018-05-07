#!/bin/bash

cd "$(dirname "$0")"

cd ../generators/graphql-docs/ && bundle install && rake build
