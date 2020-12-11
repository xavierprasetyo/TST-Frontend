import React, { useEffect } from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  AdminHome,
  CariPesanan,
  TambahPesanan,
  GantiStatus
} from '../index'

const Admin = ({ setRoute, isAuthed }) => {
  const { path, url } = useRouteMatch()
  useEffect(() => {
    setRoute([
      {
        name: 'Home',
        path: url
      },
      {
        name: 'Cari Pesanan',
        path: `${url}/cari`
      },
      {
        name: 'Tambah Pesanan',
        path: `${url}/tambah`
      },
      {
        name: 'Ganti Status',
        path: `${url}/gantiStatus`
      }
    ])
  }, [url])

  return (
    <Switch>
      <Route exact path={path}>
        <AdminHome />
      </Route>
      <Route path={`${path}/cari`}>
        <CariPesanan token={isAuthed} />
      </Route>
      <Route path={`${path}/tambah`}>
        <TambahPesanan token={isAuthed} />
      </Route>
      <Route path={`${path}/gantistatus`}>
        <GantiStatus token={isAuthed} />
      </Route>
    </Switch>
  )
}

Admin.propTypes = {
  isAuthed: PropTypes.string,
  setRoute: PropTypes.func
}

export default Admin
