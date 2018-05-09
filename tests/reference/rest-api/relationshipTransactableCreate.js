const relationshipTransactableCreate = async (I, user, transactable, relationship) => {

  const payload = {
    "form_configuration_name": "reference_rest_api_relationship_transactable_create",
    "parent_resource_id": "special_group_transactables",
    "form": {
      "relationship_id": relationship.id,
      "transactable_id": transactable.id,
      "properties": {
        "status": "active"
      }
    }
  };

  const relationshipCreateResponse = await I.sendPostRequest('/api/user/relationship_transactables', JSON.stringify(payload));
  return relationshipCreateResponse.body;
};

module.exports = relationshipTransactableCreate;
