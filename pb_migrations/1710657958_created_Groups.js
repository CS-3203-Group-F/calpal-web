/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g5c9qzsvdijo1gt",
    "created": "2024-03-17 06:45:58.593Z",
    "updated": "2024-03-17 06:45:58.593Z",
    "name": "Groups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u2hd5kaq",
        "name": "GroupID",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tzxfo5rv",
        "name": "GroupName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "skamrd3z",
        "name": "CreatedAt",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ooutyv7g",
        "name": "GroupPicture",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("g5c9qzsvdijo1gt");

  return dao.deleteCollection(collection);
})
