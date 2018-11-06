var assert = require('assert');

Feature('Users post');

Scenario('Create user', async I => {
  const payload = {
    form_configuration_name: 'reference_rest_api_create_user',
    form: {
      first_name: 'Example',
      email: `example${new Date().getTime()}@platformos.com`,
      password: 'somepassword'
    }
  };
  const response = await I.sendPostRequest('/api/users.json', JSON.stringify(payload));
  assert.equal(response.status, 201, response.body);
});
