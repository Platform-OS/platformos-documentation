const relationshipCreate = async (I, user) => {
  const relationshipCreatePayload = {
    "form_configuration_name": "reference_rest_api_relationship_create",
    "parent_resource_id": "special_group",
    "form": {
      "properties": {
        "group_name": "Captains"
      }
    }
  };
  const relationshipCreateResponse = await I.sendPostRequest('/api/user/relationships', JSON.stringify(relationshipCreatePayload));
  return relationshipCreateResponse.body.model;
};

module.exports = relationshipCreate;
