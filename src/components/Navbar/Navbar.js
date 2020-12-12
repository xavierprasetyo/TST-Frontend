import React from 'react'
import styles from './Navbar.module.scss'
import { GoogleLogout } from 'react-google-login'

const Navbar = ({ isAuthed, setAuthed, setShop }) => {
  const logout = () => {
    localStorage.removeItem('token')
    setAuthed(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        TST - Shopping List
      </div>
      <div className={styles.subTitle}>
        By : Xavier Prasetyo - 18218040
      </div>
      {
        isAuthed
          ? (<div className={styles.linkContainer}>
              <div className={styles.link} onClick={() => setShop(true)}>
                Shopping List
              </div>
              <div className={styles.link} onClick={() => setShop(false)}>
                API Log
              </div>
              <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_OAUTH_ID}
                onLogoutSuccess={logout}
                render={renderProps => (
                  <div
                    onClick={renderProps.onClick}
                    className={styles.link}
                    type="button"
                  >
                    Log Out
                  </div>
                )}
              />
            </div>)
          : null
      }

    </div>
  )
}

export default Navbar
