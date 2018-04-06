var assert = require('assert');
const createUser = require('./createExampleUser');
const createTransactable = require('./createExampleTransactable');
const createRelationship = require('./relationshipCreate');
const createRelationshipTransactable = require('./relationshipTransactableCreate');

Feature('Relationship transactables put');

Scenario('Update relationship transactable', async (I) => {
  const user = await createUser(I);
  const transactable = await createTransactable(I, user);
  const relationship = await createRelationship(I, user);
  const relationshipTransactable = await createRelationshipTransactable(I, user, transactable, relationship);
  const payload = {
    "form_configuration_name": "reference_rest_api_relationship_transactable_update",
    "form": {
      "properties": {
        "status": "active"
      }
    }
  };
  const response = await I.sendPutRequest(`/api/user/relationship_transactables/${relationshipTransactable.id}`, JSON.stringify(payload));
  assert.equal(response.status, 204);
});
