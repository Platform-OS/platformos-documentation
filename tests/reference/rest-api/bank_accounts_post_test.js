var assert = require('assert');
const createUser = require('./createExampleUser');

Feature('Bank accounts post');

Scenario('Create bank account', async (I) => {
  const user = await createUser(I);
  const payload = {
    "form_configuration_name": "reference_rest_api_bank_account_create",
    "form": {
      "payment_method_id": 1,
      "account_id": user.id,
      "public_token": "1234567"
    }
  };
  const response = await I.sendPostRequest('/api/user/bank_accounts', JSON.stringify(payload));
  console.log(response.body);
  // TODO pass good payment_method_id
  // assert.equal(response.status, 201, response.body);
});
