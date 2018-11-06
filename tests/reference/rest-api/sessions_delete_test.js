var assert = require('assert');
const createUser = require('./createExampleUser');

Feature('Sessions delete');

Scenario('Logout user', async I => {
  const user = await createUser(I);
  const loginPayload = {
    form_configuration_name: 'reference_rest_api_create_session',
    form: {
      email: user.email,
      password: 'somepassword'
    }
  };
  await I.sendPostRequest('/api/sessions', JSON.stringify(loginPayload));

  const payload = {
    form_configuration_name: 'reference_rest_api_delete_session'
  };
  const response = await I.sendDeleteRequest('/api/sessions', JSON.stringify(payload));
  // TODO not sure if it is possible to test session deletion
  // assert.equal(response.status, 204);
});
