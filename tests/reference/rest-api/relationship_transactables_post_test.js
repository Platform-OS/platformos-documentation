var assert = require('assert');
const createUser = require('./createExampleUser');
const createTransactable = require('./createExampleTransactable');
const createRelationship = require('./relationshipCreate');

Feature('Relationship transactables post');

Scenario('Create relationship transactable', async (I) => {
  const user = await createUser(I);
  const transactable = await createTransactable(I, user);
  const relationship = await createRelationship(I, user);
  const payload = {
    "form_configuration_name": "reference_rest_api_relationship_transactable_create",
    "parent_resource_id": "special_group_transactables",
    "form": {
      "relationship_id": relationship.id,
      "transactable_id": transactable.id,
      "properties": {
        "status": "active"
      }
    }
  };
  const response = await I.sendPostRequest('/api/user/relationship_transactables', JSON.stringify(payload));
  assert.equal(response.status, 201);
});
