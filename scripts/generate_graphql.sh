#!/bin/bash

cd "$(dirname "$0")"

cp ../../desksnearme/app/graph/graph/schema.graphql ../tmp/.
cd ../generators/graphql-docs/ && \
  bundle install && \
  rake build
