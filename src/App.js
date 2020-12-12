import React, { useState, useEffect } from 'react'
import { Navbar } from './components'
import { LoginPage, ListPage, LogPage } from './pages'

const App = () => {
  const [accessToken, setAccessToken] = useState('')
  const [isShop, setIsShop] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setAccessToken(token)
    }
  }, [])

  return (
    <div>
      <Navbar isAuthed={accessToken} setAuthed={setAccessToken} setShop={setIsShop}/>
      {!accessToken
        ? (<LoginPage setToken={setAccessToken} />)
        : isShop
          ? (<ListPage token={accessToken}/>)
          : (<LogPage token={accessToken}/>)
      }
    </div>
  )
}

export default App
