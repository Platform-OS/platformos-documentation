#!/bin/bash
marketplace-kit-archive && \
  FORCE=true marketplace-kit-push --email $EMAIL --token $TOKEN --url $MP_URL
