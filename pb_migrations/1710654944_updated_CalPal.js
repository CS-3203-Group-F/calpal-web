/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("urvbq4tamjbjukn")

  collection.name = "calpal"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("urvbq4tamjbjukn")

  collection.name = "CalPal"

  return dao.saveCollection(collection)
})
