import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        TST - Shopping List
      </div>
      <div className={styles.subTitle}>
        By : Xavier Prasetyo - 18218040
      </div>
    </div>
  )
}

export default Navbar
