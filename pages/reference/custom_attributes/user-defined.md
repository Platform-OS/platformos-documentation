---
title: User Defined Custom Attributes
permalink: /reference/custom-attributes/user-defined
---

## Defining

CustomAttributes are defined in YML configuration files for:

* [CustomModelTypes](/reference/custom-model-types/)
* RelationshipTypes
* TransactableTypes
* InstanceProfileTypes
* ReservationTypes

```yml
custom_attributes:
- name: name
  attribute_type: string
- name: enabled
  attribute_type: boolean
- name: age
  attribute_type: integer
```

The above configuration adds three custom properties: "name" of type _string_, "enabled" of type _boolan_, and "age" of type _integer_.

## CustomAttribute Types

Each CustomAttribute is described with the type of data that is stored within the database.
Please note that when processing your CustomAttribute in Liquid, types are automatically converted to those supported by [Liquid Data Types)[https://help.shopify.com/themes/liquid/basics/types]
The table below lists available data types for CustomAttribute configuration, that are used to configure fields on the database:

| Type     | Description                                        | Example                     |
| -------- | -------------------------------------------------- | --------------------------- |
| address  | See [Custom addresses](./custom-addresses)         |                             |
| array    | Arrays hold lists of variables of any type.        | [1, 2, 3]                   |
| boolean  | Booleans are used to represent true/false values.  | true                        |
| date     | Stores Date                                        | "2017-07-07"                |
| datetime | Stores DateTime with time zone                     | "2017-07-07 14:00:00 +0000" |
| file     | See [Custom attachments](./custom-attachments)     |                             |
| float    | Real numbers                                       | 1.0                         |
| integer  | Whole numbers that can be positive, negative, or 0 | 1                           |
| photo    | See [Custom Images](./custom-images)               |                             |
| string   | String limited to 255 characters                   | "Some String"               |
| text     | String limited to 4294967296 characters            | "Another String"            |

## Grouping into models

You can group your custom attributes into [Custom Models](/reference/custom-model-types).

### FormConfiguration

You can configure CustomAttributes settings in FormConfiguration similarly to other parameters:

```yml
...
configuration:
  properties:
    name:
      validation:
        presence: true
    age:
      validation:
        presence: true
```

{% raw %}

```liquid
{% form %}
  {% fields_for 'properties' %}
    {% input_field 'name', form: 'properties' %}
  {% endfields_for %}
{% endform %}
```

{% endraw %}

For more information see [Form Builder](/reference/form-configurations-static/) and [Working with Customizations](/getting-started/customization) articles.

## Fetching CustomAttribute with GraphQL

CustomAttributes depend on their parent objects and are accessible in the query after mapping the name of CustomAttribute with the query attribute name, you can do that with the `property` method:

```graphql
query get_customizations {
  customizations(name: "customization_name") {
    results {
      name: property(name: "name")
      age: property(name: "age")
      enabled: property(name: "enabled")
    }
  }
}
```

## Filtering CustomAttribute with GraphQL

It is possible to filter GraphQL results based on object properties states.
Each object in the properties array is connected with a CustomAttribute through its name. Additonal options are:

* value - matches the value of given property

```graphql
query get_all_johns {
  customizations(
    is_deleted: false
    properties: [{name: "name", value: "John"}]
  ) {
    results {
      first_name: property(name: "name")
    }
  }
}
```

* values - matches array of values with given `values_operator`: `OR` or `AND`.

```graphql
query get_all_johns_and_annas {
  customizations(
    is_deleted: false
    properties: [{name: "name", values: ["John", "Anna"], values_operator: OR}]
  ) {
    results {
      first_name: property(name: "name")
    }
  }
}
```

* range - available options for range are: `lt`, `lte`, `gt`, `gte`:

```graphql
query get_all_adults_below_60 {
  customizations(
    is_deleted: false
    properties: [{name: "age", range: {gte: $adult_age_treshold, lt: 60}}]
  ) {
    results {
      first_name: property(name: "name")
    }
  }
}
```

* exists

```graphql
query get_all_with_name {
  customizations(
    is_deleted: false
    properties: [{name: "name", exists: true}]
  ) {
    results {
      first_name: property(name: "name")
    }
  }
}
```

Please note that the above examples are only valid for CustomAttributes defined on CustomModelType. Please refer to GraphQL schema in order to filter CustomAttributes defined on different parents than CustomModelType.
