var assert = require('assert');
const createUser = require('./createExampleUser');

Feature('Customizations post');

Scenario('Create customization', async (I) => {
  const user = await createUser(I);
  const payload = {
    "form_configuration_name": "reference_rest_api_create_customization",
    "parent_resource_id": "links",
    "form": {
      "properties": {
        "url": "google.com"
      }
    }
  };
  const response = await I.sendPostRequest('/api/user/customizations', JSON.stringify(payload));
  assert.equal(response.status, 201);
});
