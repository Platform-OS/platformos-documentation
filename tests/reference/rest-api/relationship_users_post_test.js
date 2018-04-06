var assert = require('assert');
const createUser = require('./createExampleUser');
const createRelationship = require('./relationshipCreate');

Feature('Relationship users post');

Scenario('Create relationship user', async (I) => {
  const user = await createUser(I);
  const otherUser = await createUser(I);
  const relationship = await createRelationship(I, user);
  const payload = {
    "form_configuration_name": "reference_rest_api_relationship_user_create",
    "parent_resource_id": "special_group_users",
    "form": {
      "relationship_id": relationship.id,
      "user_id": otherUser.id,
      "properties": {
        "status": "active"
      }
    }
  };
  const response = await I.sendPostRequest('/api/user/relationship_users', JSON.stringify(payload));
  assert.equal(response.status, 201);
});
