import React from 'react'
import styles from './ShoppingList.module.scss'
import { ShoppingListItem } from '../../components'

const ShoppingList = ({ items, crossItem, checkItem, deleteItem }) => {
  return (
    <div className={styles.container}>
       {items.map((item, idx) => (
        <ShoppingListItem
          key={idx}
          index={idx}
          item={item}
          crossItem={crossItem}
          checkItem={checkItem}
          deleteItem={deleteItem}
        />
       ))}
    </div>
  )
}

export default ShoppingList
