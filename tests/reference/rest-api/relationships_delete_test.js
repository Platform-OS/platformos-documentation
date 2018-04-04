var assert = require('assert');
const createUser = require('./createExampleUser');
const relationshipCreate = require('./relationshipCreate');

Feature('Relationships delete');
Scenario('Delete relationship', async (I) => {
  const user = await createUser(I);
  const relationship = await relationshipCreate(I, user);

  const response = await I.sendDeleteRequest(`/api/user/relationships/${relationship.id}?form_configuration_name=reference_rest_api_relationship_delete`);
  console.log(response.body);
  assert.equal(response.status, 204);
});
