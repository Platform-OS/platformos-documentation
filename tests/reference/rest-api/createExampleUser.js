const createUser = async (I) => {
  const createUserPayload = {
      "form_configuration_name": "reference_rest_api_create_user",
      "form": {
        "first_name": "Existing user",
        "email": `existing_user${(new Date()).getTime()}@example.com`,
        "password": "somepassword"
      }
    };
  const createUserResponse = await I.sendPostRequest('/api/users.json', JSON.stringify(createUserPayload));
  return createUserResponse.body.model;
};

module.exports = createUser;
