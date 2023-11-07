import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert, { AlertColor, AlertProps } from '@mui/material/Alert'

interface CustomAlertProps {
  open: boolean
  message: string
  severity: AlertColor
  onClose: () => void
}

function MyAlert(props: AlertProps) {
  return <Alert variant="filled" {...props} />
}

export default function CustomAlert({
  open,
  message,
  severity,
  onClose,
}: CustomAlertProps) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MyAlert onClose={onClose} severity={severity}>
        {message}
      </MyAlert>
    </Snackbar>
  )
}
