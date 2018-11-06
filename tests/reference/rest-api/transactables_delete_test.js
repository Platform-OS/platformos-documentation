var assert = require('assert');
const createUser = require('./createExampleUser');
const createTransactable = require('./createExampleTransactable');

Feature('Transactables delete');
Scenario('Delete transactable', async I => {
  const user = await createUser(I);
  const transactable = await createTransactable(I, user);

  const response = await I.sendDeleteRequest(
    `/api/user/transactables/${transactable.id}?form_configuration_name=reference_rest_api_delete_transactable`
  );
  console.log(response.body);
  assert.equal(response.status, 204);
});
