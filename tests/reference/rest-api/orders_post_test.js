var assert = require('assert');
const createUser = require('./createExampleUser');
const createTransactable = require('./createExampleTransactable');

Feature('Orders post');

Scenario('Create order', async (I) => {
  const user = await createUser(I);
  const transactable = await createTransactable(I, user);
  const payload = {
    "form_configuration_name": "reference_rest_api_order_create",
    "parent_resource_id": "order",
    "form": {
      "transactable_id": transactable.id,
      "currency": "USD",
      "user_id": user.id
    }
  };
  const response = await I.sendPostRequest('/api/user/orders', JSON.stringify(payload));
  console.log(response.body)
  assert.equal(response.status, 201);
});
