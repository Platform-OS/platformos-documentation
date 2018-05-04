---
title: Create items from external api call
permalink: /guides/integration-with-third-party-api/create-items-from-external-api-call/
---

To create transactables from existing data you can make an api call to our service.

In order to make it we need:

* TransactableType
* FormConfiguration
* API token
* curl command

## TransactableType

```
# transactable_types/flowers.yml
name: Flowers
```

## FormConfiguration

Here we define what data we expect and required validations.

```
# form_configurations/import_flowers.liquid
---
name: import_flowers
resource: Transactable
configuration:
  name:
    validation:
      presence: true
  creator_id:
resource_owner: anyone
---
```

## Api token

You need to generate it from instance admin [Settings -> Api Keys -> Generate new API Key]

## curl command

Here is example POST request you need to send. You need to set:

* token in header
* data payload in a JSON format

```
curl https://demo.near-me.com/api/user/transactables
  -H "Authorization: Token token=1dfa2c5df68a82285bc55159982bdd15"
  -H 'Content-Type: application/json'
  --data '{"form":{"name": "Red flowers", "creator_id":"1" }, "form_configuration_name": "import_flowers", "parent_object_class":"TransactableType","parent_object_id":"flowers"}'
```
