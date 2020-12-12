/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import styles from './LogPage.module.scss'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

const initialLog = [
  {
    name: 'Get Items',
    count: 0
  },
  {
    name: 'Add Items',
    count: 0
  },
  {
    name: 'Check Items',
    count: 0
  },
  {
    name: 'Cross Items',
    count: 0
  },
  {
    name: 'Delete Items',
    count: 0
  }
]

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 300
  }
}))

const LogPage = ({ token }) => {
  const axiosConfig = {
    headers: {
      Authorization: token
    }
  }

  const classes = useStyles()

  const [log, setLog] = useState(initialLog)

  useEffect(() => {
    refreshLog()
  }, [])

  const refreshLog = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + '/log', axiosConfig)
      .then(res => {
        const { data } = res
        const logCount = [
          {
            name: 'Get Items',
            count: data.get_items
          },
          {
            name: 'Add Items',
            count: data.add_items
          },
          {
            name: 'Check Items',
            count: data.check_items
          },
          {
            name: 'Cross Items',
            count: data.cross_items
          },
          {
            name: 'Delete Items',
            count: data.delete_items
          }
        ]
        setLog(logCount)
      })
      .catch(e => alert(e))
  }

  const resetLog = () => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + '/log/reset', {}, axiosConfig)
      .then(res => {
        if (res.data.success) {
          setLog(initialLog)
        } else {
          console.error('res contains no success')
          alert('res contains no success')
        }
      })
      .catch(e => alert(e))
  }

  return (
    <div className={styles.container} >
      <div className={styles.title}>
        API Log
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button} onClick={() => resetLog()}>
          Reset
        </div>
        <div className={styles.button} onClick={() => refreshLog()}>
          Refresh
        </div>
      </div>
      <div className={styles.table}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>API</TableCell>
                <TableCell align="center">Invoke Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {log.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default LogPage
