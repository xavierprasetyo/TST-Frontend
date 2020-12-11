/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Navbar = ({ isAuthed, routes, setModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        TST - Shopping List
      </div>
    </div>
  )
}

Navbar.propTypes = {
  isAuthed: PropTypes.string,
  routes: PropTypes.array,
  setModal: PropTypes.func
}

export default Navbar
