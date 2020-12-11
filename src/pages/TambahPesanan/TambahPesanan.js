import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './TambahPesanan.module.scss'
import { Button } from '../../components'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
import { backendURL } from '../../config'

const MySwal = withReactContent(Swal)

const TambahPesanan = ({ token }) => {
  const authConfig = {
    headers: {
      'x-access-token': token
    }
  }

  const jenisList = [
    'Reguler',
    'Express',
    'Titisan Zeus',
    'Godspeed'
  ]

  const [nama, setNama] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [jumlah, setJumlah] = useState('')
  const [berat, setBerat] = useState('')
  const [layanan, setLayanan] = useState(null)

  const incompleteData = () => {
    return (!nama || !noTelp || !jumlah || !berat || !layanan)
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
      // TODO
      // Ganti path api untuk tambah pesanan
      axios.post(backendURL + '/api/pesanan', {
        // TODO
        // Masukin Data disini
        nama_pemesan: nama,
        no_telp: noTelp,
        jumlah_cucian: jumlah,
        berat_cucian: berat,
        nama_layanan: layanan

      }, authConfig)
        .then((res) => {
          MySwal.fire({
            title: 'Pesanan Berhasil Ditambahkan!',
            icon: 'success',
            timer: 2000,
            text: `ID Pesanan Anda adalah: ${res.data.id}`
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
    <div className={styles.container} >
      <div className={styles.title}>
        Tambah Pesanan
      </div>
      <div className={styles.formContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Masukkan Nama"
          name = 'nama'
          onChange={(e) => setNama(e.target.value)}
          value={nama}
        />
         <input
          className={styles.input}
          type="number"
          placeholder="Masukkan Nomor Telepon"
          name = 'noTelp'
          onChange={(e) => setNoTelp(e.target.value)}
          value={noTelp}
        />
         <input
          className={styles.input}
          type="number"
          placeholder="Masukkan Jumlah Cucian"
          name = 'jumlah'
          onChange={(e) => setJumlah(e.target.value)}
          value={jumlah}
        />
         <input
          className={styles.input}
          type="number"
          placeholder="Masukkan Berat Cucian"
          name = 'berat'
          onChange={(e) => setBerat(e.target.value)}
          value={berat}
        />
        <select
          className={styles.dropdown}
          select={layanan}
          name = 'layanan'
          onChange={(e) => setLayanan(e.target.value)}
        >
          <option value={null} >Masukkan Jenis Layanan</option>
          {jenisList.map((item, id) => (
            <option key={id} value={item} >{item}</option>
          ))}
        </select>
        <Button
          className={styles.submit}
          bgColor="#24b300"
          textColor="white"
          onClick={() => onSubmit()}
          title="Tambah"
        />
      </div>
    </div>
  )
}

TambahPesanan.propTypes = {
  token: PropTypes.string
}

export default TambahPesanan
