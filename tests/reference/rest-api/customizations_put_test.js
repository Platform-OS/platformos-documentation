var assert = require('assert');
const createUser = require('./createExampleUser');
const createCustomization = require('./createCustomization');

Feature('Customizations update');
Scenario('Update customization', async I => {
  const user = await createUser(I);
  const customization = await createCustomization(I, user);
  const payload = {
    form_configuration_name: 'reference_rest_api_update_customization',
    form: {
      properties: {
        url: 'aol.com'
      }
    }
  };

  const response = await I.sendPutRequest(`/api/user/customizations/${customization.id}`, JSON.stringify(payload));
  console.log(response.body);
  assert.equal(response.status, 204);
});
