import React from 'react'
import styles from './ItemModal.module.scss'

const ItemModal = ({ addItem, name, setName }) => {
  const handleAdd = () => {
    if (name) {
      addItem(name)
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAdd()
    }
  }
  return (
    <div className={styles.container} >
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
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
