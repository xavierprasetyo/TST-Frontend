import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './LogModal.module.scss'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import cx from 'classnames'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { backendURL } from '../../config'

const MySwal = withReactContent(Swal)

const LogModal = ({ isAuthed, setAuthed, open, setModal }) => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      paper: {
        backgroundColor: isAuthed ? '#de1738' : '#069b69',
        borderRadius: '20px',
        boxShadow: theme.shadows[5],
        padding: '15px 20px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none'
      },
      paperFocused: {
        outlineWidth: 0
      }
    })
  )

  const [password, setPassword] = useState('')

  const handleClose = () => {
    setModal(false)
  }

  const handelOpen = () => {
    setModal(true)
  }

  const login = () => {
    if (!password) {
      handleClose()
      MySwal.fire({
        title: 'Password Kosong',
        icon: 'warning',
        text: 'Masukkan Password',
        timer: 2000
      }).then(() => {
        handelOpen()
      })
      return
    }
    axios.post(backendURL + '/api/auth/signin', {
      passcode: password
    })
      .then((res) => {
        handleClose()
        MySwal.fire({
          title: 'Login Berhasil!',
          icon: 'success',
          timer: 2000
        }).then(() => {
          const token = res.data.accessToken
          localStorage.setItem('token', token)
          setAuthed(token)
        })
      })
      .catch(e => {
        handleClose()
        MySwal.fire({
          title: 'Login Gagal!',
          icon: 'error',
          text: 'password salah',
          timer: 2000
        }).then(() => {
          handelOpen()
        })
      })
  }

  const logout = () => {
    handleClose()
    MySwal.fire({
      title: 'Logout Berhasil!',
      icon: 'success',
      timer: 2000
    }).then(() => {
      localStorage.removeItem('token')
      setAuthed(null)
    })
  }

  const classes = useStyles()
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        {isAuthed
          ? (<div className={classes.paper}>
              <div className={styles.title}>
                Log Out
              </div>
              <div className={styles.warn}>
                Apakah anda yakin untuk log out?
              </div>
              <div className={cx(styles.btn, styles.logout)} onClick={() => logout()}>
                Log Out
              </div>
            </div>)
          : (<div className={classes.paper}>
              <div className={styles.title}>
                Log In
              </div>
              <input
                className={styles.input}
                type="password"
                placeholder="Masukkan Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className={cx(styles.btn, styles.login)} onClick={() => login()} >
                Log In
              </div>
            </div>)
          }
      </Fade>
    </Modal>
  )
}

LogModal.propTypes = {
  isAuthed: PropTypes.string,
  setAuthed: PropTypes.func,
  setModal: PropTypes.func,
  open: PropTypes.bool
}

export default LogModal
