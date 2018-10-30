#!/bin/bash
nvm use 8 && \
  npm ci && \
  npm run build
