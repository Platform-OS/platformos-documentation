#!/bin/bash
nvm use 10 && \
  npm ci && \
  npm run build
