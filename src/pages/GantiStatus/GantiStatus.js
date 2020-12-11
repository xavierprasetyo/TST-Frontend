import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './GantiStatus.module.scss'
import { Button } from '../../components'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
import { backendURL } from '../../config'

const MySwal = withReactContent(Swal)

const GantiStatus = ({ token }) => {
  const authConfig = {
    headers: {
      'x-access-token': token
    }
  }

  const statuses = [
    'Diterima',
    'Dikerjakan',
    'Dapat-Diambil',
    'Sudah-Diambil',
    'Dibatalkan',
    'Bermasalah'
  ]

  const [id, setID] = useState('')
  const [status, setStatus] = useState(null)

  const incompleteData = () => {
    return !id || !status
  }

  const onSubmit = () => {
    if (incompleteData()) {
      MySwal.fire({
        title: 'Terdapat Data Pesanan Kosong',
        icon: 'warning',
        text: 'Cek Data Pesanan Lagi',
        timer: 2000
      })
    } else {
      axios
        .put(
          backendURL + '/api/pesanan/updateStatus',
          {
            no_pesanan: id,
            new_status: status
          },
          authConfig
        )
        .then(res => {
          MySwal.fire({
            title: 'Status Berhasil Diubah!',
            icon: 'success',
            timer: 2000
          })
        })
        .catch(e => {
          MySwal.fire({
            title: 'Ups Terdapat Kegagalan!',
            icon: 'error',
            text: 'Kontak Admin untuk melaporkan!',
            timer: 2000
          })
        })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Ganti Status</div>
      <div className={styles.formContainer}>
        <input
          className={styles.input}
          type='text'
          placeholder='Masukkan ID Pesanan'
          name='nopesanan'
          onChange={e => setID(e.target.value)}
          value={id}
        />
        <select
          className={styles.dropdown}
          select={status}
          name='status'
          onChange={e => setStatus(e.target.value)}
        >
          <option value={null}>Masukkan Status Baru</option>
          {statuses.map((item, id) => (
            <option key={id} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Button
          className={styles.submit}
          bgColor='#24b300'
          textColor='white'
          onClick={() => onSubmit()}
          title='Ganti Status'
        />
      </div>
    </div>
  )
}

GantiStatus.propTypes = {
  token: PropTypes.string
}

export default GantiStatus
