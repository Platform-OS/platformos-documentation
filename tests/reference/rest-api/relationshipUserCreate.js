const relationshipUserCreate = async (I, user, otherUser, relationship) => {
  const payload = {
    form_configuration_name: 'reference_rest_api_relationship_user_create',
    parent_resource_id: 'special_group_users',
    form: {
      relationship_id: relationship.id,
      user_id: otherUser.id,
      properties: {
        status: 'active'
      }
    }
  };

  const relationshipCreateResponse = await I.sendPostRequest('/api/user/relationship_users', JSON.stringify(payload));
  return relationshipCreateResponse.body;
};

module.exports = relationshipUserCreate;
