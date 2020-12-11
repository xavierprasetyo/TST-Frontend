import React, { useState } from 'react'
import styles from './ItemModal.module.scss'

const ItemModal = ({ addItem }) => {
  const [name, setName] = useState('')
  const handleAdd = () => {
    if (name) {
      addItem(name)
    }
  }
  return (
    <div className={styles.container} >
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div
        className={styles.addBtn}
        onClick={() => handleAdd()}
      >
        Add
    </div>
    </div>
  )
}

export default ItemModal
