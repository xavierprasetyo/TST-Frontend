import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Navbar } from './components'
import { LoginPage, ListPage, LogPage } from './pages'

const App = () => {
  const [accessToken, setAccessToken] = useState('ada')

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
          ? (<ListPage token={accessToken}/>)
          : (<Redirect to="/" />)
        }
      </Route>
      <Route path="/log">
        {accessToken
          ? (<LogPage token={accessToken}/>)
          : (<Redirect to="/" />)
        }
      </Route>
    </Switch>
  </Router>
  )
}

export default App
