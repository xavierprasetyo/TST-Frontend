import React from 'react'
import styles from './ShoppingListItem.module.scss'
import cx from 'classnames'

const ShoppingListItem = ({ item, index, crossItem, checkItem, deleteItem }) => {
  return (
    <div className={styles.item}>
      <div className={styles.checkWrapper}>
        <input
          style={{
            width: '17px',
            height: '17px'
          }}
          type="checkbox"
          checked={item.checked}
          onChange={() => checkItem(index, !item.checked)}
        />
        <div
          className={cx(styles.title, item.crossed ? styles.crossed : null)}
          onClick={() => crossItem(index, !item.crossed) }
        >
          {item.name}
        </div>
      </div>
    <div
      className={styles.deleteBtn}
      onClick={() => deleteItem(item.id)}
    >
      <div className={styles.delete}>
        &times;
      </div>
    </div>
  </div>
  )
}

export default ShoppingListItem
