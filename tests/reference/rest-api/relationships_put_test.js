var assert = require('assert');
const createUser = require('./createExampleUser');
const createRelationship = require('./relationshipCreate');

Feature('Relationships put');

Scenario('Update relationship', async I => {
  const user = await createUser(I);
  const relationship = await createRelationship(I, user);
  const payload = {
    form_configuration_name: 'reference_rest_api_relationship_update',
    form: {
      properties: {
        group_name: 'Senior Captains'
      }
    }
  };
  const response = await I.sendPutRequest(`/api/user/relationships/${relationship.id}`, JSON.stringify(payload));
  assert.equal(response.status, 204);
});
