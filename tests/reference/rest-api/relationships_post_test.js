var assert = require('assert');
const createUser = require('./createExampleUser');

Feature('Relationships post');

Scenario('Create relationship', async I => {
  const user = await createUser(I);
  const payload = {
    form_configuration_name: 'reference_rest_api_relationship_create',
    parent_resource_id: 'special_group',
    form: {
      properties: {
        group_name: 'Captains'
      }
    }
  };
  const response = await I.sendPostRequest('/api/user/relationships', JSON.stringify(payload));
  assert.equal(response.status, 201);
});
