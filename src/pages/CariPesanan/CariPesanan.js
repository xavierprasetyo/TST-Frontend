import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './CariPesanan.module.scss'
import { Button } from '../../components'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
import { backendURL } from '../../config'
import { DataGrid } from '@material-ui/data-grid'

const MySwal = withReactContent(Swal)

const CariPesanan = ({ token }) => {
  const authConfig = {
    headers: {
      'x-access-token': token
    }
  }

  const columns = [
    { field: 'no_pesanan', headerName: 'Nomor Pesanan', width: 150 },
    { field: 'nama_pemesan', headerName: 'Nama', width: 150 },
    { field: 'no_telp', headerName: 'Nomor Telepon', width: 150 },
    { field: 'timestamp', headerName: 'Tanggal Masuk', width: 170 },
    { field: 'jumlah_cucian', headerName: 'Jumlah Cucian', width: 150 },
    { field: 'berat_cucian', headerName: 'Berat Cucian', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'harga_bayar', headerName: 'Harga', width: 150 },
    { field: 'estimasi_selesai', headerName: 'Estimasi Selesai', width: 170 },
    { field: 'nama_layanan', headerName: 'Layanan', width: 150 }
  ]

  const [id, setID] = useState('')
  const [data, setData] = useState([])

  const incompleteData = () => {
    return (!id)
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
      axios.get(backendURL + '/api/pesanan/' + id, authConfig)
        .then((res) => {
          const pesanan = res.data.pesanan
          const array = [{
            id: pesanan._id,
            no_pesanan: pesanan.no_pesanan,
            nama_pemesan: pesanan.nama_pemesan,
            no_telp: pesanan.no_telp,
            timestamp: new Date(pesanan.timestamp).toDateString(),
            jumlah_cucian: pesanan.jumlah_cucian,
            berat_cucian: pesanan.berat_cucian,
            status: pesanan.status,
            harga_bayar: pesanan.harga_bayar,
            estimasi_selesai: new Date(pesanan.estimasi_selesai).toDateString(),
            nama_layanan: pesanan.nama_layanan
          }]
          setData(array)
          MySwal.fire({
            title: 'Pesanan Ditemukan!',
            icon: 'success',
            timer: 2000
          })
        })
        .catch((e) => {
          if (e.response.status === 404) {
            setData([])
            MySwal.fire({
              title: 'Nomor Pesanan Tidak Ditemukan',
              icon: 'error',
              text: 'Periksa kembali nomor pesanan',
              timer: 2000
            })
          } else {
            MySwal.fire({
              title: 'Ups Terdapat Kegagalan!',
              icon: 'error',
              text: 'Kontak Admin untuk melaporkan!',
              timer: 2000
            })
          }
        })
    }
  }

  return (
    <div className={styles.container} >
      <div className={styles.title}>
        Cari Pesanan
      </div>
      <div className={styles.formContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Masukkan Nomor Pesanan"
          name='nopesanan'
          onChange={(e) => setID(e.target.value)}
          value={id}
        />
        <Button
          className={styles.submit}
          bgColor="#24b300"
          textColor="white"
          onClick={() => onSubmit()}
          title="Cari"
        />
      </div>
      <div style={{ display: 'flex', height: '200px', width: '80%', marginTop: '30px' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={data} columns={columns}/>
        </div>
      </div>
    </div>
  )
}

CariPesanan.propTypes = {
  token: PropTypes.string
}

export default CariPesanan
