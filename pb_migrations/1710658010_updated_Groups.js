/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5c9qzsvdijo1gt")

  // remove
  collection.schema.removeField("u2hd5kaq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5c9qzsvdijo1gt")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
