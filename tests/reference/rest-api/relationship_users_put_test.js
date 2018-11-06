var assert = require('assert');
const createUser = require('./createExampleUser');
const createRelationship = require('./relationshipCreate');
const createRelationshipUser = require('./relationshipUserCreate');

Feature('Relationship users put');

Scenario('Update relationship user', async I => {
  const user = await createUser(I);
  const otherUser = await createUser(I);
  const relationship = await createRelationship(I, user);
  const relationshipUser = await createRelationshipUser(I, user, otherUser, relationship);
  const payload = {
    form_configuration_name: 'reference_rest_api_relationship_user_update',
    form: {
      properties: {
        status: 'not_verified'
      }
    }
  };
  const response = await I.sendPutRequest(
    `/api/user/relationship_users/${relationshipUser.id}`,
    JSON.stringify(payload)
  );
  assert.equal(response.status, 204);
});
