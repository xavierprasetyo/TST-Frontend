import React, { useState, useEffect } from 'react'
import styles from './ListPage.module.scss'
import { Shoppinglist, ItemModal } from '../../components'
import axios from 'axios'

const ListPage = ({ token }) => {
  const axiosConfig = {
    headers: {
      Authorization: token
    }
  }

  const [items, setItems] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + '/items', axiosConfig)
      .then(res => setItems(res.data))
      .catch(e => alert(e))
  }, [])

  const addItem = (name) => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + '/items/add', {
        name
      }, axiosConfig)
      .then(res => {
        const newItem = {
          id: res.data.id,
          name,
          checked: false,
          crossed: false
        }
        const tempItems = items
        tempItems.push(newItem)
        setItems([...tempItems])
        setName('')
      })
      .catch(e => alert(e))
  }
  const checkItem = (id, checked) => {
    axios
      .put(process.env.REACT_APP_BACKEND_URL + '/items/check', {
        id: items[id].id,
        checked
      }, axiosConfig)
      .then(res => {
        if (res.data.success) {
          const tempItems = items
          tempItems[id].checked = res.data.checked
          setItems([...tempItems])
        } else {
          console.error('res contains no success')
          alert('res contains no success')
        }
      })
      .catch(e => alert(e))
  }

  const crossItem = (id, crossed) => {
    axios
      .put(process.env.REACT_APP_BACKEND_URL + '/items/cross', {
        id: items[id].id,
        crossed
      }, axiosConfig)
      .then(res => {
        if (res.data.success) {
          const tempItems = items
          tempItems[id].crossed = res.data.crossed
          setItems([...tempItems])
        } else {
          console.error('res contains no success')
          alert('res contains no success')
        }
      })
      .catch(e => alert(e))
  }

  const deleteItem = (id) => {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + '/items/delete/' + id, axiosConfig)
      .then(res => {
        if (res.data.success) {
          const tempItems = items.filter(item => item.id !== id)
          setItems([...tempItems])
        } else {
          console.error('res contains no success')
          alert('res contains no success')
        }
      })
      .catch(e => alert(e))
  }

  return (
    <div className={styles.container} >
      <ItemModal
        addItem={addItem}
        name={name}
        setName={setName}
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
