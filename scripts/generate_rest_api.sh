#!/bin/bash

cd "$(dirname "$0")"

rm -rf ../tmp/resources/
cd ../../desksnearme; yard -p ../nearme-documentation/generators/resources/ -o ../nearme-documentation/tmp/resources/ --no-progress --tag title --tag description --tag format --tag permalink --tag required app/forms/user_form.rb app/forms/transactable_form.rb app/forms/address_form.rb app/forms/bank_account_form.rb app/forms/credit_card_form.rb app/forms/custom_address_form.rb app/forms/custom_attachment_form.rb app/forms/custom_image_form.rb app/forms/customization_form.rb app/forms/order_form.rb app/forms/relationship_form.rb app/forms/relationship_transactable_form.rb app/forms/relationship_user_form.rb app/forms/session_form.rb app/forms/stripe_merchant_account_form.rb app/forms/user_profile_form.rb
cd ../nearme-documentation; cp tmp/resources/*Form.html marketplace_builder/liquid_views/generated/resources/.
