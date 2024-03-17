/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "urvbq4tamjbjukn",
    "created": "2024-03-17 05:42:30.592Z",
    "updated": "2024-03-17 05:42:30.592Z",
    "name": "CalPal",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jem4rfhk",
        "name": "image",
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
  const collection = dao.findCollectionByNameOrId("urvbq4tamjbjukn");

  return dao.deleteCollection(collection);
})
