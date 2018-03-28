var assert = require('assert');
const createUser = require('./createExampleUser');

Feature('Users put');

const payload = {
  "form_configuration_name": "reference_rest_api_update_user",
  "form": {
    "first_name": "Mike"
  }
};

Scenario('Update user', async (I) => {
  const user = await createUser(I);
  const response = await I.sendPutRequest(`/api/users/${user.id}`, JSON.stringify(payload));
  assert.equal(response.status, 204);
});


Scenario('Update not existing user', async (I) => {
  const response = await I.sendPutRequest('/api/users/9999', JSON.stringify(payload));
  assert.equal(response.status, 404);
});
