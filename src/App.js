/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Navbar } from './components'
import GoogleLogin from 'react-google-login'
// import { Admin, CekStatus } from './pages'

const App = () => {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setAccessToken(token)
    }
  }, [])

  const responseGoogle = (res) => {
    console.log(res)
  }

  return (
    <div>
      <Navbar isAuthed={accessToken} />
      {
        accessToken ? (<LoginPage />) : (<ListPage/>)
      }
      <GoogleLogin
        clientId="447061751909-n543mqv6laleumc8mmjshtmj0sp2mddc.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />,
    </div>
  )
}

export default App
