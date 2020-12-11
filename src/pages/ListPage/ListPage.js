import React, { useState } from 'react'
import styles from './ListPage.module.scss'
import { Shoppinglist, ItemModal } from '../../components'

const dummyItem = [
  {
    id: 1,
    name: 'adada',
    checked: false,
    crossed: false
  },
  {
    id: 2,
    name: 'adada',
    checked: false,
    crossed: true
  }
]

const ListPage = () => {
  const [items, setItems] = useState(dummyItem)

  const addItem = (name) => {
    // post api here
    const newItem = {
      id: items[items.length - 1].id + 1,
      name,
      checked: false,
      crossed: false
    }
    const tempItems = items
    // post api here
    tempItems.push(newItem)
    setItems([...tempItems])
  }
  const checkItem = (id, checked) => {
    const tempItems = items
    // post api here
    tempItems[id].checked = checked
    setItems([...tempItems])
  }

  const crossItem = (id, crossed) => {
    const tempItems = items
    // post api here
    tempItems[id].crossed = crossed
    setItems([...tempItems])
  }

  const deleteItem = (id) => {
    // post api here
    const tempItems = items.filter(item => item.id !== id)
    setItems([...tempItems])
  }
  return (
    <div className={styles.container} >
      <ItemModal
        addItem={addItem}
      />
      <Shoppinglist
        items={items}
        checkItem={checkItem}
        crossItem={crossItem}
        deleteItem={deleteItem}
      />
    </div>
  )
}

export default ListPage
