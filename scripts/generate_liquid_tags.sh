#!/bin/bash

cd "$(dirname "$0")"

rm -rf ../tmp/liquid_tags/
cd ../../desksnearme; yard -p ../nearme-documentation/generators/liquid_tags/ -o ../nearme-documentation/tmp/liquid_tags/ --no-progress --markup=markdown --tag arguments lib/liquify/tags/*_tag.rb
cd ../nearme-documentation; cp tmp/liquid_tags/Liquify/Tags/*Tag.html marketplace_builder/views/partials/generated/liquid_tags/
