import React from 'react'
import { Link } from 'react-router-dom'
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
      <div className={styles.linkContainer}>
        <Link to={'/shopping'} className={styles.link}>
          Shopping List
        </Link>
        <Link to={'/log'} className={styles.link}>
          API Log
        </Link>
      </div>
    </div>
  )
}

export default Navbar
