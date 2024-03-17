/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ck9e3f3t3kkuyll",
    "created": "2024-03-17 06:52:24.399Z",
    "updated": "2024-03-17 06:52:24.399Z",
    "name": "user_group_junction",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vpg3m9qs",
        "name": "userId",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "m0jpqoii",
        "name": "groupId",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "g5c9qzsvdijo1gt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ck9e3f3t3kkuyll");

  return dao.deleteCollection(collection);
})
