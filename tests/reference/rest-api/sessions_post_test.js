var assert = require('assert');
const createUser = require('./createExampleUser');

Feature('Sessions post');

Scenario('Login user', async I => {
  const user = await createUser(I);
  const payload = {
    form_configuration_name: 'reference_rest_api_create_session',
    form: {
      email: user.email,
      password: 'somepassword'
    }
  };
  const response = await I.sendPostRequest('/api/sessions', JSON.stringify(payload));
  assert.equal(response.status, 201);
});
