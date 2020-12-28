const ItemService = {
  //relevant
  getItems(db) {
      return db
          .select('*')
          .from('items')
  },
  getItemById(db, item_id) {
      return db
          .select('*')
          .from('items')
          .where('items.id', item_id)
          .first()
  },
  getItemByUserId(db, user_id) {
      return db
          .select('*')
          .from('items')
          .where('items.user_id', user_id)
          .first()
  },
  //relevant
  insertItem(db, newItem) {
      return db
          .insert(newItem)
          .into('items')
          .returning('*')
          .then(rows => {
              return rows[0]
          })
  },
  //relevant
  updateItem(db, item_id, newItem) {
      return db('items')
          .update(newItem, returning = true)
          .where({
              id: item_id
          })
          .returning('*')
          .then(rows => {
              return rows[0]
          })
  },
  //relevant
  deleteItem(db, item_id) {
      return db('items')
          .delete()
          .where({
              'id': item_id
          })
  }
}

module.exports = ItemService