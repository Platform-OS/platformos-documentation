var assert = require('assert');
const createUser = require('./createExampleUser');
const createCustomization = require('./createCustomization');

Feature('Customizations delete');
Scenario('Delete customization', async I => {
  const user = await createUser(I);
  const customization = await createCustomization(I, user);

  const response = await I.sendDeleteRequest(
    `/api/user/customizations/${customization.id}?form_configuration_name=reference_rest_api_delete_customization`
  );
  console.log(response.body);
  assert.equal(response.status, 204);
});
