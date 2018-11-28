#!/bin/bash

cd "$(dirname "$0")"

rm -rf ../tmp/liquid_filters/
cd ../../desksnearme; yard -p ../nearme-documentation/generators/liquid_filters/ -o ../nearme-documentation/tmp/liquid_filters/ --no-progress --markup none --verbose app/lib/liquify/filters/platform_filters.rb
cd ../nearme-documentation; cp tmp/liquid_filters/Liquify/Filters/PlatformFilters.html marketplace_builder/views/partials/generated/liquid_filters/filters.liquid
