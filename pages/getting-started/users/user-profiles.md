---
title: User Profiles
permalink: /getting-started/users/user-profiles
---

Think of User Profile as a role in the marketplace. Each User Profile can be associated with any number of [Custom Attributes](/reference/custom-attributes/), [Categories](/reference/categories/) and [Custom Model Types](/reference/custom-model-types). All users are assigned a user profile named Default. If you do not want to distinguish one type of users from the other, then you do not need to create any other user profiles. However, for sake of this section and all the following ones, we will assume that we want to build a marketplace which connects Developers, who build marketplaces, with Clients, who want to hire them. In order to display different UI based on their role in the marketplace, we will create two profiles - developer and client.

# Create User Profile

To create user profile, one needs to create a yml file in `instance_profiles` directory. Let's start with example profile for developer. We create a file named `instance_profiles/developer.yml` and content:

```yml
name: developer
custom_attributes:
- name: bio
  attribute_type: string
- name: years_of_experience
  attribute_type: integer
- name: hourly_rate
  attribute_type: float
```

* `name` - this is the most important setting. It's [snake case](https://en.wikipedia.org/wiki/Snake_case) version is used in many places like Form Configuration and GraphQL.
* `custom_attributes` - this is the heart of user profiles. It allows to specify custom attributes for this user profile. They are used to build customized forms that gather user input during registration for later display. It takes an array of elements that consist of name and type. Please check [full Custom Attribute documentation](/reference/custom-attributes/)

Similarly, we can create role 'client' by creating `instance_profiles/client.yml`:

```yml
name: client
```

Having this set up, we can now create our first forms, which will allow user to register.
