var assert = require('assert');
const createUser = require('./createExampleUser');

Feature('Transactables post');

Scenario('Create transactable', async (I) => {
  const user = await createUser(I);
  const payload = {
    "form_configuration_name": "reference_rest_api_create_transactable",
    "parent_resource_id": "boat",
    "form": {
      "name": "name",
      "creator_id": user.id
    }
  };
  const response = await I.sendPostRequest('/api/user/transactables', JSON.stringify(payload));
  assert.equal(response.status, 201);
});
