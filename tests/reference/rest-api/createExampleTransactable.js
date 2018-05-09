const createTransactable = async (I, user) => {
  const createTransactablePayload = {
    "form_configuration_name": "reference_rest_api_create_transactable",
    "parent_resource_id": "boat",
    "form": {
      "name": "name",
      "creator_id": user.id
    }
  };
  const createTransactableResponse = await I.sendPostRequest('/api/user/transactables', JSON.stringify(createTransactablePayload));
  return createTransactableResponse.body;
};

module.exports = createTransactable;
