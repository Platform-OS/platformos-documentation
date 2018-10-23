#!/bin/bash
nvm use 8 && \
  npm ci && \
  npm run build && \
  marketplace-kit-archive && \
  FORCE=true marketplace-kit-push --email $EMAIL --token $TOKEN --url $STAGING_URL
