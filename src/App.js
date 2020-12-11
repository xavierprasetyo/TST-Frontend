import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Navbar } from './components'
import { LoginPage, ListPage } from './pages'

const App = () => {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setAccessToken(token)
    }
  }, [])

  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        {accessToken
          ? (<Redirect to="/shopping" />)
          : (<LoginPage setToken={setAccessToken} />)
        }
      </Route>
      <Route path="/shopping">
        {accessToken
          ? (<ListPage/>)
          : (<Redirect to="/" />)
        }
      </Route>
    </Switch>
  </Router>
  )
}

export default App
