var assert = require('assert');
const createUser = require('./createExampleUser');
const createTransactable= require('./createExampleTransactable');

Feature('Transactables update');
Scenario('Update transactable', async (I) => {
  const user = await createUser(I);
  const transactable = await createTransactable(I, user);
  const payload = {
    "form_configuration_name": "reference_rest_api_transactable_update",
    "form": {
      "name": "new name"
    }
  };

  const response = await I.sendPutRequest(`/api/user/transactables/${transactable.id}`, JSON.stringify(payload));
  console.log(response.body);
  assert.equal(response.status, 204);
});
