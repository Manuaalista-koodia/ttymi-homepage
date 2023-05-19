migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05k7iq1b1x1aftw")

  // remove
  collection.schema.removeField("nrhtgysm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jrbe3ro9",
    "name": "datetime",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05k7iq1b1x1aftw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrhtgysm",
    "name": "time",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jrbe3ro9",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
