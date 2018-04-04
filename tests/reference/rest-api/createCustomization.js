const createCustomization = async (I, user) => {
  const createCustomizationPayload = {
    "form_configuration_name": "reference_rest_api_create_customization",
    "parent_resource_id": "links",
    "form": {
      "properties": {
        "url": "google.com"
      }
    }
  };
  const createCustomizationResponse = await I.sendPostRequest('/api/user/customizations', JSON.stringify(createCustomizationPayload));
  return createCustomizationResponse.body.model;
};

module.exports = createCustomization;
