const createUser = async I => {
  const email = `existing_user${new Date().getTime()}@example.com`;
  const createUserPayload = {
    form_configuration_name: 'reference_rest_api_create_user',
    form: {
      first_name: 'Existing user',
      email: email,
      password: 'somepassword'
    }
  };
  const createUserResponse = await I.sendPostRequest('/api/users.json', JSON.stringify(createUserPayload));
  return { email: email, id: createUserResponse.body.id, errors: createUserResponse.errors };
};

module.exports = createUser;
