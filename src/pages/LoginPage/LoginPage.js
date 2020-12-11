import React from 'react'
import styles from './LoginPage.module.scss'
import GoogleLogin from 'react-google-login'

const LoginPage = ({ setToken }) => {
  const responseGoogle = (res) => {
    const token = res.tokenId
    localStorage.setItem('token', token)
    setToken(token)
  }

  const failResponse = (res) => {
    console.log(res)
  }

  return (
    <div className={styles.container} >
      <div className={styles.title}>
        Please Login Using Google
      </div>
      <div className={styles.login} >
        <GoogleLogin
          render={renderProps => (
            <button
              disabled={renderProps.disabled}
              onClick={renderProps.onClick}
              className={styles.loginButton}
              type="button"
            >
              Login With Google
            </button>
          )}
          clientId={process.env.REACT_APP_GOOGLE_OAUTH_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={failResponse}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}

export default LoginPage
