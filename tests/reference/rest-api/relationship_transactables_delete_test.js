var assert = require('assert');
const createUser = require('./createExampleUser');
const relationshipCreate = require('./relationshipCreate');
const relationshipUserCreate = require('./relationshipUserCreate');

Feature('Relationship users delete');

Scenario('Delete relationship user', async (I) => {
  const user = await createUser(I);
  const otherUser = await createUser(I);
  const relationship = await relationshipCreate(I, user);
  const relationshipUser = await relationshipUserCreate(I, user, otherUser, relationship);

  const response = await I.sendDeleteRequest(`/api/user/relationship_users/${relationshipUser.id}?form_configuration_name=reference_rest_api_relationship_user_delete`);
  console.log(response.body);
  assert.equal(response.status, 204);
});
